import { resolve } from 'path'
import { defineConfig } from 'vite'
import nunjucks from 'vite-plugin-nunjucks'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        sandbox: resolve(__dirname, 'sandbox.html'),
      },
    },
  },

  plugins: [
    nunjucks(),
  ],
})