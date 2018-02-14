import React, { Component } from "react";
import "./App.css";

class Stopwatch extends Component {
  state = {
    running: false,
    elapsedTime: 0
  };

  componentWillMount() {
    this.interval = setInterval(this.tick, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    if (this.state.running) {
      this.setState({
        elapsedTime: this.state.elapsedTime + 1
      });
    }
  };

  watch = () => {
    this.setState({
      button: this.state.running ? "Start" : "Stop",
      running: !this.state.running
    });
  };

  reset = () => {
    this.setState({
      running: false,
      elapsedTime: 0
    });
  };

  render() {
    const { elapsedTime, running } = this.state;
    return (
      <div className="App">
        <div className="stopwatch">
          <div className="header">
            <h1>Stopwatch</h1>
          </div>
          <div className="countscore">
            <p>{elapsedTime}</p>
          </div>
          <button className="button increment" onClick={() => this.watch()}>
            {running ? "Stop" : "Start"}
          </button>
          <button className="button decrement" onClick={() => this.reset()}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count ? this.state.count - 1 : 0
    });
  };

  reset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <div className="counter">
          <div className="header" onClick={() => this.reset()}>
            <h1>COUNTER</h1>
          </div>
          <div className="countscore">
            <p>{count}</p>
          </div>
          <button className="button increment" onClick={() => this.increment()}>
            Increment
          </button>
          <button className="button decrement" onClick={() => this.decrement()}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Counter />
      <Stopwatch />
    </div>
  );
}

export default App;
