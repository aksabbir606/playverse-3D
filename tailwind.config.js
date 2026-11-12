/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pv: {
          bg: '#060913',
          surface: '#0D1326',
          card: '#121A33',
          border: '#1E2A4A',
          cyan: '#00F0FF',
          blue: '#3B82F6',
          purple: '#8B5CF6'
        }
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.35)',
        'neon-purple': '0 0 25px rgba(139, 92, 246, 0.35)'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        playverse: {
          primary: '#00F0FF',
          secondary: '#8B5CF6',
          accent: '#3B82F6',
          neutral: '#121A33',
          'base-100': '#060913',
          'base-200': '#0D1326',
          'base-300': '#16203D',
          info: '#38BDF8',
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444'
        }
      }
    ]
  }
};