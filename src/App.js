import React, { Component } from 'react';
import './app.css';
import './styles/button.css'
import Contract from './pages/contract/index'
import Chart from './pages/chart'

console.log(process.env)

class App extends Component {
  constructor(props) {
    super(props)

    // use a flag to navigate between crud and chart
    this.state = {
      showCRUD: true
    }
  }

  render () {
    return (
      <div className="App" >
        <button onClick={() => this.setState({ showCRUD: true })}>Contract CRUD</button>
        <button onClick={() => this.setState({ showCRUD: false })}>Chart</button>
        
        {this.state.showCRUD && <Contract />}
        {!this.state.showCRUD && <Chart />}
      </div>
    );
  }
}

export default App;
