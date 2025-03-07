<template>
  <button class="counter" @click="incrementCount">
    Host counter: {{ count }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    countValue: { type: Number, required: true },
  },
  data: () => {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      return this.count++;
    },
  },
});
</script>

<style scoped>
.counter {
  border: 0 solid #e2e8f0;
  margin-top: 10px;
  background-color: rgb(246, 179, 82);
  border-radius: 0.25rem;
  font-weight: 700;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: rgb(24, 24, 24);
}
</style>
