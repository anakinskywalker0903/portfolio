# Projects

### 1. InstaSave Navigator
- **Problem solved:** Chrome extension to instantly jump to the oldest saved Instagram post (no native way to do this on Instagram)
- **Tech:** JavaScript (ES6), Chrome Extensions API (Manifest V3), DOM manipulation, infinite-scroll boundary detection
- **Contribution:** AI-assisted
- **Challenges:** Reliably detecting the infinite-scroll boundary; Instagram flagged the automated scrolling and blocked it
- **Status:** Paused/abandoned ~7 months ago due to Instagram's anti-automation detection — would need to solve that to revive it
- **Future improvements:** N/A unless the platform-detection issue can be worked around

### 2. Brainstormzz
- **Problem solved:** AI-powered brainstorming whiteboard — turns a short prompt into structured, expandable idea categories, with refinement/summarization/translation tools
- **Tech:** React 18 + Tailwind CSS, HTML5 Canvas (whiteboard), OpenAI API (paid) — originally built for a Chrome AI Hackathon using Chrome's on-device Gemini Nano, later switched to OpenAI's API post-hackathon (README on GitHub is outdated and should be updated to reflect this)
- **Contribution:** Full UI/whiteboard concept and design were his own idea; implementation AI-assisted
- **Challenges:** Getting accurate AI output — keeping generated ideas on-topic and reliably structured as JSON
- **Status:** Live, considered finished, not actively maintained
- **Future improvements:** None planned

### 3. RailDost
- **Problem solved:** Show all possible routes between two Indian Railway stations (direct vs. via), compare travel time, visualized on an interactive map (Google Maps-style route view)
- **Tech:** HTML/CSS/JS, Leaflet.js (mapping), AI-assisted
- **Challenges:** No stable public data source — found a limited-data API that was later pulled by its owner; current working version uses hardcoded sample data, not live data
- **Status:** Paused — would revisit if a reliable Indian Railways data source becomes available
- **Future improvements:** Replace hardcoded data with a real data source, if one becomes available

### 4. AI Career Engine
- **Problem solved:** Dual-mode career guidance platform — (1) Career Discovery: resume + personality quiz → top 3 role matches, (2) Job Optimization: resume + job description → match %, skill gaps, personalized 12-week roadmap
- **Tech:** React 18 + Vite (frontend, deployed on Vercel), Node.js + Express (backend, deployed on Railway), pdfjs-dist (PDF resume parsing), multer (file upload), Anthropic Claude API (AI-generated career insights)
- **Contribution:** AI-assisted
- **Challenges:** Resume-to-role matching/scoring logic (50% skill overlap + 50% personality signal alignment)
- **Status:** Live and working
- **Future improvements:** Add article/YouTube video suggestions into the roadmap output

### 5. NoteLift
- **Problem solved:** Chrome extension that lets students extract highlighted text from PDFs/webpages into clean, module-wise revision notes (local-only, no login, exportable as TXT/Markdown)
- **Tech:** Chrome Extension (Manifest), local storage only, no backend/cloud
- **Contribution:** Logic and architecture are his own; syntax/implementation AI-assisted
- **Challenges:** Architecting reliable text-selection capture and the modular note-organization system
- **Status:** **Published and live on the Chrome Web Store** (real users, v0.2, actively updated) — the most concretely "shipped" project in this profile
- **Future improvements:** None planned currently

### 6. SSB Practice Simulator (WAT / PPDT / SRT)
- **Problem solved:** Practice tool for SSB (Indian Armed Forces Services Selection Board) aspirants — simulates Word Association Test, Picture Perception & Description Test, and Situation Reaction Test with official timing
- **Tech:** Frontend web app (deployed on Vercel), randomized word/situation/image banks, fullscreen + keyboard-shortcut UX
- **Contribution:** Built the timer logic and overall test-flow accuracy himself; AI-assisted on other parts
- **Challenges:** Building the image bank for PPDT (no-repeat randomization)
- **Status:** Live
- **Future improvements:** Add an AI-driven mock interviewer feature

---

## Notes for Accuracy

- Update the Brainstormzz GitHub README — it still describes the original hackathon build (Chrome's on-device Gemini Nano, "no cloud required"), but the shipped/live version uses OpenAI's paid API.
- NoteLift is the strongest single credential here for interviews — actually published and live on the Chrome Web Store with real users, not just a personal repo. Lead with this when asked "have you shipped anything real?"
- Be consistent across all six projects about what's genuinely his (concept/logic/UI direction) vs. AI-assisted (syntax-level implementation) — don't let it read as fully independent development.
- RailDost and InstaSave Navigator are blocked by external factors (data source pulled; platform anti-automation detection), not abandoned from lack of effort — frame this way in interviews.
