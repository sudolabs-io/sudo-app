import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    message: ''
  }
  componentDidMount() {
    this.fetchMessage()
  }
  fetchMessage = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL)
      const { message } = await response.json()
      this.setState({ message })
    } catch (error) {
      // handle error
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.message}
          </p>
          <p>Version: 5</p>
        </header>
      </div>
    );
  }
}

export default App;
