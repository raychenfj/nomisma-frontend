import React, { Component } from 'react'
import styles from './index.module.css'
import get from 'get-value'

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
          {/* <tr>
            <td>1</td>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            <td>2</td>
          </tr> */}
        </tbody>
      </table>
    )
  }
}
