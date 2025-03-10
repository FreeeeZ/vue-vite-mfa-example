import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2'
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'microservice1',
      filename: 'remoteEntry.js',
      remotes: {
        mainApp: 'http://localhost:4173/assets/remoteEntry.js',
      },
      exposes: {
        './Microservice1': './src/components/Microservice1.vue',
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