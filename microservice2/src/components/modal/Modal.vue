<template>
  <div class="modal">
    <div class="modal-content">
      <span @click="close">❌</span>
      <p>Текущее значение счетчика: {{ count }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      count: 0,
      counterInstanceFromHost: null,
    };
  },
  methods: {
    close() {
      this.$destroy();
      this.$el.remove();
    },
  },
  async mounted() {
    const singletonFromHost = await import('mainApp/CounterInstance');
    this.counterInstanceFromHost = singletonFromHost.default.counterInstance;

    this.count = this.counterInstanceFromHost.getCount();
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}

span {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>