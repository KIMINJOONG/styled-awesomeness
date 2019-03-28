import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
      <div className="App">
        <Button danger />
        <Button />
      </div>
      </>
    );
  }
}

const Button = ({ danger }) => (
  <button className={danger ? "button button--danger" : "button button--success"}>HELLO</button>
);

export default App;
