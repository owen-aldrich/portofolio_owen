/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'page-bg':       '#f9f9f8',
        'primary':       '#1a1c1c',
        'secondary':     '#5f5e5e',
        'muted':         '#6b6b6b',
        'border-color':  '#e8e8e5',
        'icon-border':   '#e4e4e0',
        'chip-bg':       '#f3f4f3',
        'image-bg':      '#eeeeed',
        'dark-btn':      '#2f3130',
        'dark-btn-text': '#f1f1f0',
        'accent-yellow': '#f6e27a',
        'accent-yellow-border': '#1a1a1a',
        'heading-dot':   '#705953',
        'badge-bg':      '#f7d9d0',
        'badge-text':    '#745d56',
        'tech-pill-text':'#4f4441',
      },
      fontFamily: {
        'newsreader': ['"Newsreader"', 'serif'],
        'jakarta':    ['"Plus Jakarta Sans"', 'sans-serif'],
        'mono':       ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'card-lg': '24px',
        'card-sm': '16px',
        'icon':    '12px',
      },
      maxWidth: {
        'content': '1080px',
      },
      boxShadow: {
        'card':    '0px 1px 2px 0px rgba(0,0,0,0.05)',
        'card-sm': '0px 1px 1px rgba(0,0,0,0.05)',
        'nav':     '0px 8px 30px 0px rgba(0,0,0,0.05)',
        'modal':   '0px 24px 60px 0px rgba(0,0,0,0.14)',
      },
    },
  },
  plugins: [],
}
