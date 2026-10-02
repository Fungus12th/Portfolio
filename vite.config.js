import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html'),
        discprojektblue: resolve(__dirname, 'project-discprojektblue.html'),
        graphos: resolve(__dirname, 'project-graphos.html'),
        cryptoaudit: resolve(__dirname, 'project-cryptoaudit.html'),
        bosses: resolve(__dirname, 'project-bosses.html')
      }
    }
  }
});
