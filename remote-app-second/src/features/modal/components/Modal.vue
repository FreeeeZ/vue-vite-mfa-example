<template>
  <div class="modal">
    <div class="modal-content">
      <span @click="close">❌</span>
      <p>Count from remote-app2: {{ count }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      hostData: null,
      count: 0,
    };
  },
  async mounted() {
    // @ts-ignore
    const hostModule = await import("shared");
    this.hostData = hostModule.default;

    this.count = this.hostData?.getCount();
  },
  methods: {
    close() {
      this.$el.remove();
    },
  },
};
</script>
