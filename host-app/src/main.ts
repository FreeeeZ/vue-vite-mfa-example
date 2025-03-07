import { initFederation } from "@softarc/native-federation";

(async () => {
  await initFederation({
    "remote-app-first": "http://localhost:4174/remoteEntry.json",
    "remote-app-second": "http://localhost:4175/remoteEntry.json",
  });

  await import("./bootstrap");
})();
