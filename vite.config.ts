import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@frontend': path.resolve(__dirname, './src'),
      '@common': path.resolve(__dirname, './src/common'),
      '@sdk': path.resolve(__dirname, './src/sdk'), // Add this if you have an sdk directory
    },
  },
});
