<template>
  <div class="main-app">
    <h1>Основное приложение</h1>
    <p>Текущее значение счетчика: {{ counterInstance.count }}</p>
    <div class="buttons">
      <button @click="increment">Увеличить</button>
      <button @click="decrement" :disabled="counterInstance.count === 0">Уменьшить</button>
      <button @click="openModalFromMS">Открыть модальное окно из второго микросервиса</button>
    </div>
    <Microservice1 :key="counterInstance.count" />
    <Microservice2 :key="counterInstance.count" />
  </div>
</template>

<script>
import { counterInstance } from '../services';
import { openModal } from 'microservice2/OpenModal';

export default {
  name: 'MainApp',
  components: {
    Microservice1: () => import('microservice1/Microservice1'),
    Microservice2: () => import('microservice2/Microservice2'),
  },
  setup() {
    const increment = () => {
      counterInstance.increment();
    };

    const decrement = () => {
      counterInstance.decrement();
    };

    const openModalFromMS = () => {
      openModal();
    };

    return {
      counterInstance,
      increment,
      decrement,
      openModalFromMS,
    };
  },
};
</script>

<style scoped>
.main-app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  border: 2px solid #42b983;
  margin: 10px;
  border-radius: 8px;
  background-color: #2faef3;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 200px;
  margin: 0 auto;
}
</style>