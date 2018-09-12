import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setSelectedVariable } from '../../actions/variableActions'

class VariableSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedVariable: props.selectedVariable
    }
  }
  onChangeSelectedVariable = (event) => {
    const { setSelectedVariable } = this.props
    const selected = event.target.value
    this.setState({
      selectedVariable: selected
    })
    setSelectedVariable(selected)
  }
  render() {
    const { variables } = this.props
    const { selectedVariable } = this.state
    return (
      <div>
        <select value={selectedVariable} onChange={this.onChangeSelectedVariable}>
          {variables.map(({ label, value }) => (
            <option value={value}>{label}</option>
          ))}
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  variables: state.variables.list,
  selectedVariable: state.variables.selectedVariable
})

const mapDispatchToProps = {
  setSelectedVariable
}

export default connect(mapStateToProps, mapDispatchToProps)(VariableSelector)