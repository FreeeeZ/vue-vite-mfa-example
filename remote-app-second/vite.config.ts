import { federation } from "@module-federation/vite";
import { createEsBuildAdapter } from "@softarc/native-federation-esbuild";
import pluginVue from "esbuild-vue";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

export default defineConfig(async ({ command }) => {
  return {
    server: {
      fs: {
        allow: [".", "../shared"],
      },
    },
    plugins: [
      await federation({
        options: {
          workspaceRoot: __dirname,
          outputPath: "dist",
          tsConfig: "tsconfig.json",
          federationConfig: "module-federation/federation.config.cjs",
          verbose: true,
          dev: command === "serve",
        },
        adapter: createEsBuildAdapter({ plugins: [pluginVue()] }),
      }),
      createVuePlugin(),
    ],
  };
});
