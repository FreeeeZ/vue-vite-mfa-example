class SharedState {
  constructor() {
    this.state = {
      count: 0
    };
  }

  increment() {
    this.state.count++;
  }

  decrement() {
    this.state.count--;
  }

  getCount() {
    return this.state.count;
  }
}

const singleton = new SharedState();

export default singleton;