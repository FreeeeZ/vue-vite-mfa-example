import { reactive } from 'vue';
import { Counter } from 'shared-state';

export const counterInstance = reactive(new Counter());
