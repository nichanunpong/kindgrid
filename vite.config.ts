import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // Set base path for GitHub Pages
  // Change 'KindGrid' to your actual repository name
  base: process.env.NODE_ENV === 'production' ? '/KindGrid/' : '/',

  server: {
    host: '::',
    port: 8080,
  },

  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
