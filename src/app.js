import React from "react";
import { connect } from "react-redux";
import Header from "./header.js";
import Footer from "./footer.js";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <button onClick={this.increment}>Add to counter</button>
        <br />
        <button onClick={this.decrement}>Subtract from counter</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
