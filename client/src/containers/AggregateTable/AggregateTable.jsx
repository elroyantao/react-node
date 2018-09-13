import React, { Component } from 'react'
import { connect } from 'react-redux'

import Loader from '../../components/Loader/Loader'

import './AggregateTable.css'

class AggregateTable extends Component {
  static defaultProps = {
    aggregateValues: []
  }

  renderLoading() {
    return (
      <div>Please wait while the page loads</div>
    )
  }

  renderHeader() {
    const { selectedVariable } = this.props
    return (
      <thead>
        <tr>
          <th>#</th>
          <th className="capitalize">{selectedVariable}</th>
          <th>Count</th>
          <th>Average Age</th>
        </tr>
      </thead>
    )
  }

  render() {
    const { aggregateValues, loading } = this.props
    if (loading) return <Loader />
    return (
      <div>
        <table>
          {this.renderHeader()}
          <tbody>
            {aggregateValues.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.col}</td>
                <td>{row.count}</td>
                <td>{row.ageAvg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedVariable: state.variables.selectedVariable,
  aggregateValues: state.aggregates.list[state.variables.selectedVariable],
  loading: state.aggregates.loading
})

export default connect(mapStateToProps)(AggregateTable)
