import React, { Component } from 'react';
import './app.css';
import './styles/button.css'
import Contract from './pages/contract/index'

class App extends Component {
  render () {
    return (
      <div className="App" >
        <Contract />
      </div>
    );
  }
}

export default App;
