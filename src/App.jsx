import { Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


//
class App extends Component {
    state = {
      name: 'Miguel Sávio',
      counter: 0,
      count: 0,
    };

  handlePClick = () => {
    this.setState({ name: 'Leão' });
  };

  handleAClick = (event) => {
    event.preventDefault();
    const {counter} = this.state;
    this.setState({counter: counter + 1});
  }

  render() {
    const { name, count, counter } = this.state;

    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank"
          onClick={this.handleAClick}>
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => this.setState({ count: count + 1 })}>
            count is {count}
          </button>
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }
}

export default App;
