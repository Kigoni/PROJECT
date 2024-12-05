import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Maps '@' to 'src' directory
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Keeps 'lucide-react' out of optimization
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // If the chunk is from node_modules, it will be bundled into a separate vendor.js
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
