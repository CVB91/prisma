import { defineConfig } from 'vite'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
const publicDir = resolve(__dirname, 'public')


export default defineConfig({
  root,
  publicDir,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about', 'about.html'),
        gallery: resolve(root, 'gallery', 'gallery.html'),
        contact: resolve(root, 'contact', 'contact.html')
      },
    },
  },
})
