import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ReactCompilerConfig from 'babel-plugin-react-compiler'

// https://vite.dev/config/
export default defineConfig({
  base: '/hotpot/',
  plugins: [react({
    babel: {
      plugins: [ReactCompilerConfig],
    },
  })],
})
