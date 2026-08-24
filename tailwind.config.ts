import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#FBF6F0',
        cream: '#F4ECE2',
        sand: '#ECE0D0',
        ink: '#2A211C',
        espresso: '#3A2E26',
        gold: '#C9A24B',
        blush: '#E8B4B8',
        coral: '#E2725B',
        burgundy: '#7A2E38',
        sage: '#7C8B6F',
      },
      fontFamily: {
        sacramento: ['var(--font-sacramento)', 'cursive'],
        alex: ['var(--font-alex)', 'cursive'],
        allura: ['var(--font-allura)', 'cursive'],
        dancing: ['var(--font-dancing)', 'cursive'],
        beau: ['var(--font-beau)', 'cursive'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1.14)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        kenburns: 'kenburns 24s ease-in-out infinite alternate',
        floaty: 'floaty 6s ease-in-out infinite',
        marquee: 'marquee 36s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
