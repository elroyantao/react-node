import React, { Component } from 'react'
import { connect } from 'react-redux'

import logo from '../../logo.svg'
import { getAllVariables } from '../../actions/variableActions'

import './App.css'

class App extends Component {
  componentDidMount() {
    const { getAllVariables } = this.props
    getAllVariables()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    )
  }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = {
  getAllVariables
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

