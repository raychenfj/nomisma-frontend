import React, { Component } from 'react'
import ContractTable from './components/contractTable'
import ContractDetail from './components/contractDetail'
import { mode, storage } from '../../constants'
import merge from 'merge'
import uuid from 'uuid/v4'
import { getInitialData } from '../../utils'

export default class Contract extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: getInitialData(),
      currentRow: null,
      mode: mode.CREATE,
      showDetail: false,
      showTable: true
    }
  }
  render () {
    return (
      <div>
        {this.state.showTable && <button style={{ marginBottom: '15px' }} onClick={() => this.onCreate()}> create </button>}
        <ContractTable
          show={this.state.showTable}
          data={this.state.data}
          onView={(row) => this.onView(row)}
          onEdit={(row) => this.onEdit(row)}
          onDelete={(row, index) => this.onDelete(row, index)} />

        <ContractDetail
          show={this.state.showDetail}
          mode={this.state.mode}
          data={this.state.currentRow}
          onBack={() => this.onBack()}
          onSubmit={(values) => this.onSubmit(values)}
        />
      </div>
    )
  }

  onView (row) {
    const currentRow = merge.recursive(true, row)
    this.setState({
      mode: mode.VIEW,
      currentRow,
      showDetail: true,
      showTable: false
    })
  }

  onEdit (row) {
    const currentRow = merge.recursive(true, row)
    this.setState({
      mode: mode.EDIT,
      currentRow,
      showDetail: true,
      showTable: false
    })
  }

  onDelete (row, index) {
    if (window.confirm('delete current row ?')) {
      const data = [...this.state.data]
      data.splice(index, 1)
      this.setState({
        data
      })
      this.persistData(data)
    }
  }

  onCreate () {
    this.setState({
      mode: mode.CREATE,
      showDetail: true,
      showTable: false
    })
  }

  onSubmit (values) {
    if (values.id) {
      this.update(values)
    } else {
      this.create(values)
    }
    this.setState({
      showDetail: false,
      showTable: true
    })
  }

  create (values) {
    let data = [{
      id: uuid(),
      user: {
        name: values.name,
        surname: values.surname
      },
      ...values
    }]
    data = this.state.data.concat(data)
    this.setState({
      data
    })
    this.persistData(data)
  }

  update (values) {
    const data = [...this.state.data]
    const index = data.findIndex(item => item.id === values.id)
    const item = {
      ...values,
      user: {
        name: values.name,
        surname: values.surname
      }
    }
    data[index] = item
    this.setState({
      data
    })
    this.persistData(data)
  }

  persistData (data) {
    localStorage.setItem(storage.DATA, JSON.stringify(data))
  }

  onBack () {
    this.setState({
      showDetail: false,
      showTable: true
    })
  }
}
