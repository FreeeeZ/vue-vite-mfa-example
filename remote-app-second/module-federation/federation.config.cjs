const {
  withNativeFederation,
  shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
  name: "remoteAppSecond",
  remotes: {
    hostApp: "hostApp@http://localhost:4173/remoteEntry.json",
  },
  exposes: {
    "./remote-app-second": "./src/App.vue",
    "./openModal": "./src/features/modal/index.ts",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
      includeSecondaries: false,
    }),
    vue: { singleton: true },
    shared: { singleton: true },
  },
});
