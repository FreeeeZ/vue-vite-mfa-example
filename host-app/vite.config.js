import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2'
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'mainApp',
      filename: 'remoteEntry.js',
      remotes: {
        microservice1: 'http://localhost:4174/assets/remoteEntry.js',
        microservice2: 'http://localhost:4175/assets/remoteEntry.js',
      },
      exposes: {
        './CounterInstance': './src/services/index.js',
      },
      shared: ['vue', 'shared-state'],
    }),
  ],
  build: {
    target: 'esnext',
  },
  server: {
    fs: {
      allow: [".", "../shared-state"],
    },
    cors: true,
  },
});