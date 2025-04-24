import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Make sure the root is set to the correct directory (in this case, the root of the project)
  build: {
    outDir: 'dist', // This is where your build files will go
  },
});
