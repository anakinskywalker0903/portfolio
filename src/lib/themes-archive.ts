import type { Theme } from './themes';

/**
 * ARCHIVED SKINS & COLOR PRESETS
 * Safely preserved for future use.
 */

// ── 1. MIDNIGHT PLUM & HONEY DAWN (Preserved by request) ────────────────────
export const MIDNIGHT_PLUM_THEME: Theme = {
  id: 'plum-honey',
  name: 'Midnight Plum & Honey Dawn',
  subtitle: 'PLUM #3B163A & HONEY #F0C986',
  group: 'ARCHIVED',
  family: 'plum',
  swatches: ['#3B163A', '#F0C986', '#E8B768'],
  tickerText: 'MIDNIGHT PLUM ✦ HONEY DAWN ✦ BUILD • LEARN • ITERATE • SHIP ✦ ',
  vars: {
    '--c-bg':              '#3B163A',   // midnight plum
    '--c-bg-alt':          '#4D1E4C',
    '--c-bg-surface':      '#FDFBF7',   // warm honey cream surface
    '--c-bg-page':         '#FFFFFF',
    '--c-bg-footer':       '#1E0A1D',

    '--c-accent':          '#F0C986',   // honey dawn
    '--c-accent-2':        '#E8B768',
    '--c-accent-text':     '#250924',

    '--c-text':            '#FFFFFF',
    '--c-text-muted':      'rgba(255,255,255,0.65)',
    '--c-text-dark':       '#250924',
    '--c-text-dark-muted': 'rgba(37,9,36,0.5)',

    '--c-border':          'rgba(240,201,134,0.25)',
    '--c-border-dark':     'rgba(59,22,58,0.12)',
    '--c-shadow':          '#250924',

    '--c-ticker-bg':       '#2A0F29',
    '--c-ticker-text':     '#F0C986',
    '--c-ticker-border':   'rgba(240,201,134,0.3)',

    '--c-nav-bg':          '#FFFFFF',
    '--c-nav-content':     '#3B163A',

    '--c-panel-bg':        '#2A0F29',
    '--c-panel-text':      '#FFFFFF',

    '--scrollbar-track':   '#3B163A',
    '--scrollbar-thumb':   '#F0C986',

    '--c-preloader-bg':    '#3B163A',
    '--c-preloader-text':  '#F0C986',

    '--c-curtain-1':       '#F0C986',
    '--c-curtain-2':       '#3B163A',

    '--c-hero-shadow':     '#220B21',
    '--c-grid':            'rgba(240,201,134,0.08)',

    '--c-selection-bg':    '#F0C986',
    '--c-selection-text':  '#250924',
  },
};

// ── OTHER EXPERIMENTAL COMBOS ARCHIVE ──────────────────────────────────────
export const ARCHIVED_COMBOS: Record<string, Partial<Theme>> = {
  coralMaroon: {
    id: 'coral-maroon',
    name: 'Electric Coral & Royal Maroon',
    swatches: ['#5E0000', '#FF6332', '#FFA07A'],
  },
  fireYellow: {
    id: 'fire-yellow',
    name: 'Fire Red & Electric Yellow',
    swatches: ['#FF2200', '#FFEE00'],
  },
  pinkChill: {
    id: 'pink-chill',
    name: 'True Pink & Chill White',
    swatches: ['#DF1843', '#FFF9FA'],
  },
  milkyMantis: {
    id: 'milky-mantis',
    name: 'Milky & Mantis',
    swatches: ['#59C749', '#FFFDF1'],
  },
  vulcanicoNoturno: {
    id: 'vulcanico-noturno',
    name: 'Vulcanico & Noturno',
    swatches: ['#FF4103', '#001621'],
  },
};
