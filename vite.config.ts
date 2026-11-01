// Original work by Rohit Dubey — github.com/anakinskywalker0903
// Repository: anakinskywalker0903/portfolio | See AGENT.md for usage terms.
import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// Dev middleware so /api/chat works in `npm run dev` just like on Vercel
function devApiPlugin(): Plugin {
  return {
    name: 'dev-api-chat',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url?.startsWith('/assets/resumes/')) {
          req.url = req.url.replace('/assets/resumes/', '/resumes/');
          return next();
        }
        const url = req.url?.split('?')[0];
        if (url !== '/api/chat' && url !== '/api/chat/') {
          return next();
        }

        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const fullUrl = `http://${req.headers.host || 'localhost:5173'}/api/chat`;
              const webReq = new Request(fullUrl, {
                method: 'POST',
                headers: req.headers as any,
                body: body,
              });

              // Dynamically run api/chat.ts with absolute path
              const mod = await server.ssrLoadModule(path.resolve(__dirname, 'api/chat.ts'));
              const webRes: Response = await mod.default(webReq);

              res.statusCode = webRes.status;
              webRes.headers.forEach((val, key) => {
                res.setHeader(key, val);
              });

              if (webRes.body) {
                const reader = webRes.body.getReader();
                while (true) {
                  const { done, value } = await reader.read();
                  if (done) break;
                  res.write(Buffer.from(value));
                }
              }
              res.end();
            } catch (err: any) {
              console.error('Local /api/chat error:', err);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else {
          res.statusCode = 405;
          res.end('Method Not Allowed');
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Populate process.env so api/chat.ts can read GROQ_API_KEY / GEMINI_API_KEY locally
  Object.assign(process.env, env);

  return {
    plugins: [
      react(),
      tailwindcss(),
      devApiPlugin(),
    ],
    server: {
      hmr: {
        // Prevent the "reload application" overlay from showing during skin switches
        overlay: false,
      },
    },
    assetsInclude: ['**/*.glb'],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
})

