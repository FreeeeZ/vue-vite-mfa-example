import Vue, { h } from "vue";
import App from "./App.vue";

const app = new Vue({
  render: () => h(App),
});

app.$mount("#app");
