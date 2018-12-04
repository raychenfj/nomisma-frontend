import React, { Component } from 'react'
import styles from './index.module.css'
import get from 'get-value'

/**
 * Table
 * 
 * The api design is inspired by Element UI(https://elemefe.github.io/element-react/#/zh-CN/table)
 * 
 * props properties
 * 
 * props.columns: Array, define the columns of the table
 * props.column.name: String, the title in table header
 * props.column.prop: String, corresponding props in data, can access nested object value
 * props.column.formatter: Function, format the cell content
 * props.column.render: Function(row, index), define the custom render function for the cell, the prop property will be ignored
 * 
 * props.data: Array, the table data, should contain fields defined in columns and a id, otherwise the array index will be used as key when render
 */
export default class Table extends Component {
  render () {
    const columns = this.props.columns || []
    const data = this.props.data || []

    return (
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column, index) =>
              <th key={index}>{column.name}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {
            data && data.length ? (
              data.map((row, index) =>
                <tr key={row.id || index}>
                  {columns.map((column, i) => {
                    if (column.prop) {
                      return <td key={i}>
                        {column.formatter ? column.formatter(get(row, column.prop)) : get(row, column.prop)}
                      </td>
                    }
                    if (column.render && typeof column.render === 'function') {
                      return <td key={i}>{column.render(row, index)}</td>
                    }
                    return null
                  }
                  )}
                </tr>
              )
            ) : (
                <tr>
                  <td colSpan={columns.length}>no data </td>
                </tr>
              )

          }
        </tbody>
      </table>
    )
  }
}
