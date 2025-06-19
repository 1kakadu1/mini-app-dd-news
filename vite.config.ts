import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
//import mkcert from 'vite-plugin-mkcert';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    //process.env.HTTPS &&
    //mkcert(),
  ],
  build: {
    outDir: 'build',
  },
  server: {
    host: true,
  },
})
