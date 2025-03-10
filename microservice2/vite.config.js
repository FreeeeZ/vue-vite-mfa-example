import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2'
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'microservice2',
      filename: 'remoteEntry.js',
      remotes: {
        mainApp: 'http://localhost:4173/assets/remoteEntry.js',
      },
      exposes: {
        './Microservice2': './src/components/Microservice2.vue',
        './OpenModal': './src/components/modal/index.js',
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