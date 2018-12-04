import React, { Component, Fragment } from 'react'
import Table from '../../../components/table'
import { dateFormatter } from '../../../formatters'

export default class ContractList extends Component {
  render () {
    if (!this.props.show) {
      return null;
    }

    const columns = [
      { name: 'Name', prop: 'user.name' },
      { name: 'Surname', prop: 'user.surname' },
      { name: 'Amount In Usd', prop: 'amountInUsd' },
      { name: 'Currency', prop: 'currency' },
      { name: 'Date', prop: 'date', formatter: dateFormatter },
      {
        name: 'Actions', render: (row, index) => (
          <Fragment>
            <button onClick={() => this.props.onView(row, index)}>View</button>
            <button onClick={() => this.props.onEdit(row, index)}>Edit</button>
            <button onClick={() => this.props.onDelete(row, index)}>Delete</button>
          </Fragment>
        )
      }
    ]

    return (
      <div>
        <Table columns={columns} data={this.props.data} />
      </div>
    );
  }
}
