/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian:        '#0a0a0a',
        charcoal:        '#141414',
        graphite:        '#1e1e1e',
        jade:            '#3d7a6e',
        'jade-light':    '#5aada0',
        'jade-dim':      '#2a5a51',
        ocean:           '#1e4d6b',
        'ocean-light':   '#2e7ca8',
        amber:           '#c8933a',
        'amber-light':   '#e8b84b',
        volcanic:        '#2a1a0e',
        paper:           '#f0ede8',
        'paper-dim':     '#b8b3ad',
      },
      fontFamily: {
        mono:   ['Redhat', 'JetBrains Mono', 'Fira Code', 'monospace'],
        sans:   ['TaipeiSansTC', 'YakuHanJP', 'system-ui', 'sans-serif'],
        serif:  ['GenYoMin2TW', 'Noto Serif TC', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
