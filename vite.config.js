import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Your GitHub repository name
  build: {
    rollupOptions: {
      input: './index.html', // Ensure this path is correct
    },
  },
  assetsInclude: ['**/*.JPG'],
});
