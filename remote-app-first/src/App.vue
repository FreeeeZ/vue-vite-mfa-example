<template>
  <div class="card card_gray">
    <div class="title">First remote app</div>
    <Counter :count-value="count" />
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Counter from "./components/Counter.vue";

export default defineComponent({
  components: { Counter },
  data() {
    return {
      hostData: null,
      count: 0,
    };
  },
  methods: {
    increment() {
      this.hostData?.increment();
      this.count = this.hostData?.getCount();
    },
    decrement() {
      this.hostData?.decrement();
      this.count = this.hostData?.getCount();
    },
  },
  async mounted() {
    // @ts-ignore
    const hostModule = await import("shared");
    this.hostData = hostModule.default;

    this.count = this.hostData?.getCount();
  },
});
</script>

<style scoped>
.card {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin: 20px 20px 20px 20px;
  width: 250px;
  padding: 20px;
  text-align: center;
  color: white;
  float: left;
}

.card_gray {
  background: #1e1b1b;
}

.title {
  margin-top: 10px;
  font-size: 25px;
}
</style>
