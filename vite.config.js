import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html'),
        discprojektblue: resolve(__dirname, 'project-discprojektblue.html'),
        graphos: resolve(__dirname, 'project-graphos.html')
      }
    }
  }
});
