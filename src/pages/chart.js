import React, { Component } from 'react'
import { getExchangeRate } from '../apis'
import { Line } from 'react-chartjs-2';
import options from './chartOptions'
import { dateFormatter, rateFormatter } from '../formatters'
export default class chart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      labels: [],
      data: []
    }
  }


  render () {
    const data = {
      labels: this.state.labels,
      datasets: [
        {
          ...options.datasets[0],
          label: 'Exchange Rate of ETH/USD for last 7 days',
          data: this.state.data
        }
      ]
    };

    return (
      <div>
        <Line data={data}></Line>
      </div>
    )
  }
  async componentDidMount () {
    const result = await getExchangeRate(7)
    const labels = result.map(item => dateFormatter(item.time))
    const data = result.map(item => rateFormatter(item.rate))

    this.setState({
      labels,
      data
    })
  }
}
