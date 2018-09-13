import React, { Component } from 'react'
import { connect } from 'react-redux'

import VariableSelector from '../VariableSelector/VariableSelector'
import AggregateTable from '../AggregateTable/AggregateTable'
import Header from '../../components/Header/Header'

import { getAllVariables } from '../../actions/variableActions'
import { getAggregates } from '../../actions/aggregateActions'

import 'reset-css'
import './App.css'

class App extends Component {
  componentDidMount() {
    const { getAllVariables, getAggregates } = this.props
    getAllVariables()
    getAggregates()
  }
  render() {
    return (
      <div className="App">
        <Header />
        <VariableSelector />
        <AggregateTable />
      </div>
    )
  }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = {
  getAllVariables,
  getAggregates
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

