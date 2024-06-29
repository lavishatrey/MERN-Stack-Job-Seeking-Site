import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  build: {
    outDir: 'build', // Change 'dist' to 'build'
  },
  plugins: [react()],// other configurations...
});
