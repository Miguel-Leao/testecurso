import { Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


//
class App extends Component {
  constructor(props) {
    super(props);
    this.handlePClick = this.handlePClick.bind(this);

    this.state = {
      name: 'Miguel Leão',
    };
  }

  handlePClick(){
    const { name } = this.state;
    console.log(`<p> clicado ${name}`);
  }

  render() {
    const { name } = this.state;

    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            count is {this.state.count}
          </button>
          <p onClick={this.handlePClick}>
            {name}
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
