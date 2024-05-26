/// <reference types="vitest" />
import { defineConfig } from 'vite'
import {coverageConfigDefaults} from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
    coverage: {
      provider: "istanbul",
      exclude: ["src/main.tsx", ...coverageConfigDefaults.exclude]
    }
  },
  plugins: [react()],
})
