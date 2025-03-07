const {
  withNativeFederation,
  shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
  name: "hostApp",
  remotes: {
    remoteAppFirst: "remoteAppFirst@http://localhost:4174/remoteEntry.json",
    remoteAppSecond: "remoteAppSecond@http://localhost:4175/remoteEntry.json",
  },
  exposes: {
    "./sharedSingleton": "./src/services/singleton.ts",
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
