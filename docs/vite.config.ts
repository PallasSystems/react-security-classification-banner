import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://rscb.pallas.uk/',
  resolve: {
    alias: [
      {
        find: '@pallassystems/react-security-classification-banner',
        replacement: path.resolve(__dirname, '../src/'),
      },
    ],
  },
});
