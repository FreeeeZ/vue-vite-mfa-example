export class Counter {
  constructor() {
    this.count = 0;
  }

  getCount() {
    return this.count;
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    if (this.count === 0) return;

    this.count -= 1;
  }
}