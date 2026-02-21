/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-blue-100', 'bg-emerald-100', 'bg-orange-100', 'bg-sky-100', 'bg-violet-100', 'bg-amber-100',
    'text-blue-700', 'text-emerald-700', 'text-orange-700', 'text-sky-700', 'text-violet-700', 'text-amber-700',
    'bg-blue-500', 'bg-emerald-500', 'bg-orange-500', 'bg-sky-500', 'bg-violet-500', 'bg-amber-500',
    'border-blue-500', 'border-emerald-500', 'border-orange-500', 'border-sky-500', 'border-violet-500', 'border-amber-500'
  ]
}