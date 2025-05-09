import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ], 
  test: {
    globals: true,
    setupFiles: ['./setupTests.ts'],
    environment: 'jsdom',
    coverage: {
      include: ['src/**/*.{js,jsx,ts,tsx}'], // specify files to include
      exclude: ['src/generated/**/*.ts'],    // specify files to exclude
      reporter: ['text', 'html']  // customize reporters. don't forget to include 'html' if you use vitest-ui
    }
  }
}as UserConfig)
