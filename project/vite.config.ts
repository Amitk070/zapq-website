import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // ✅ ensures correct relative paths for deployed assets
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  build: {
    outDir: 'dist', // ✅ matches Vercel's outputDirectory
    emptyOutDir: true
  }
});
