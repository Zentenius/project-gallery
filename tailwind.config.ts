import type { Config } from 'tailwindcss'

const config: Config = {
  // Ensure Tailwind scans all your files for classes
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    // Include the output directory for static builds
    './out/**/*.{html,js,css}',
  ],
  // Ensure compatibility with static exports
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config