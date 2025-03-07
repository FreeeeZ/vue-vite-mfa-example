<template>
  <div>
    <div class="host">
      <div class="card">
        <div class="title">Host app</div>
        <Counter :count-value="count" />
        <button @click="openModal">Открыть модалку</button>
      </div>
    </div>
    <component :is="firstRemoteComponent"></component>
    <component :is="secondRemoteComponent"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { loadRemoteModule } from "@softarc/native-federation";
import Counter from "./components/Counter.vue";
// @ts-ignore
// import { openModal } from "remoteAppSecond/openModal";

import { sharedSingleton } from "./services/singleton";

export default defineComponent({
  components: { Counter },
  data: () => {
    return {
      count: sharedSingleton.getCount(),
    };
  },
  computed: {
    firstRemoteComponent: () => () =>
      loadRemoteModule("remote-app-first", "./remote-app-first"),
    secondRemoteComponent: () => () =>
      loadRemoteModule("remote-app-second", "./remote-app-second"),
  },
  mounted() {
    sharedSingleton.increment = () => {
      this.count = sharedSingleton.getCount();
    };
  },
  methods: {
    openModal() {
      // openModal();
    },
  },
});
</script>

<style scoped>
.host .card {
  background: #3178c6;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin: 20px 20px 20px 20px;
  width: 250px;
  padding: 20px;
  text-align: center;
  color: white;
  float: left;
}

.host .title {
  margin-top: 10px;
  font-size: 25px;
}
</style>
