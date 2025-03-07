export class Singleton {
  constructor() {
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.state.count += 1;
  }

  decrement() {
    this.state.count -= 1;
  }

  getCount() {
    return this.state.count;
  }
}