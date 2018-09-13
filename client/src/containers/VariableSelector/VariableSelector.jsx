import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectedVariableChanged } from '../../actions/variableActions'

import './VariableSelector.css'

class VariableSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedVariable: props.selectedVariable
    }
  }
  onChangeSelectedVariable = (event) => {
    const { selectedVariableChanged } = this.props
    const selected = event.target.value
    this.setState({
      selectedVariable: selected
    })
    selectedVariableChanged(selected)
  }
  render() {
    const { variables, loading } = this.props
    const { selectedVariable } = this.state
    return (
      <div className="VariableSelector">
        Variable : 
        <select value={selectedVariable} onChange={this.onChangeSelectedVariable} disabled={loading}>
          {variables.map(({ label, value }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  variables: state.variables.list,
  selectedVariable: state.variables.selectedVariable,
  loading: state.aggregates.loading
})

const mapDispatchToProps = {
  selectedVariableChanged
}

export default connect(mapStateToProps, mapDispatchToProps)(VariableSelector)