const {
  withNativeFederation,
  shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
  name: "remoteAppFirst",
  remotes: {
    hostApp: "hostApp@http://localhost:4173/remoteEntry.json",
  },
  exposes: {
    "./remote-app-first": "./src/App.vue",
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
