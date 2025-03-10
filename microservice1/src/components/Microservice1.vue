<template>
  <div class="microservice1">
    <h2>Это компонент из Microservice 1</h2>
    <p>Текущее значение счетчика: {{ count }}</p>
    <div class="buttons">
      <button @click="increment">Увеличить</button>
      <button @click="decrement" :disabled="count === 0">Уменьшить</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'Microservice1',
  setup() {
    const count = ref(0);

    let counterInstanceFromHost;

    onMounted(async () => {
      const singletonFromHost = await import('mainApp/CounterInstance');
      counterInstanceFromHost = singletonFromHost.default.counterInstance;

      count.value = counterInstanceFromHost.getCount();
    });

    const increment = () => {
      if (counterInstanceFromHost) {
        counterInstanceFromHost.increment();
        count.value = counterInstanceFromHost.getCount();
      }
    };

    const decrement = () => {
      if (counterInstanceFromHost) {
        counterInstanceFromHost.decrement();
        count.value = counterInstanceFromHost.getCount();
      }
    };

    return {
      count,
      increment,
      decrement
    };
  },
};
</script>

<style scoped>
.microservice1 {
  border: 2px solid #42b983;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  background-color: #39cf57;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 200px;
  margin: 0 auto;
}
</style>