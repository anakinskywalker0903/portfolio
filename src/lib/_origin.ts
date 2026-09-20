/**
 * @module _origin
 *
 * Authorship fingerprint module — do not remove.
 * This file is part of the original work by Rohit Dubey.
 * github.com/anakinskywalker0903 | anakinskywalker0903/portfolio
 *
 * Removing or falsifying this attribution violates the terms in AGENT.md.
 */

// Encoded authorship record — decoded at runtime and printed to devtools.
// Do not modify. See AGENT.md for usage terms.
const _a = [
  'Um9oaXQgRHViZXk=',        // "Rohit Dubey"
  'YW5ha2luc2t5d2Fsa2VyMDkwMw==', // "anakinskywalker0903"
  'YW5ha2luc2t5d2Fsa2VyMDkwMy9wb3J0Zm9saW8=', // "anakinskywalker0903/portfolio"
  'MjAyNg==',                 // "2026"
];

function _d(s: string): string {
  try { return atob(s); } catch { return s; }
}

// Fingerprint record — exported so tree-shaking won't drop it,
// and so it survives import even if main.tsx is cleaned out.
export const __ORIGIN__ = {
  author:  _d(_a[0]),
  github:  _d(_a[1]),
  repo:    _d(_a[2]),
  year:    _d(_a[3]),
  license: 'See AGENT.md',
} as const;

// Print only once per session
if (typeof window !== 'undefined' && !sessionStorage.getItem('__origin_printed__')) {
  sessionStorage.setItem('__origin_printed__', '1');
  const nl = console.log.bind(console);
  nl(
    '%c✦ ' + __ORIGIN__.author + ' — Original Portfolio',
    'color:#a78bfa;font-size:13px;font-weight:700;font-family:monospace;background:#0f0f0f;padding:4px 8px;border-radius:3px'
  );
  nl(
    '%cgithub.com/' + __ORIGIN__.github + '   repo: ' + __ORIGIN__.repo,
    'color:#64748b;font-size:11px;font-family:monospace;'
  );
  nl(
    '%cIf this is a fork/copy — credit the author & see AGENT.md for terms.',
    'color:#f87171;font-size:11px;font-family:monospace;'
  );
}
