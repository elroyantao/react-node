import { callApi } from '../lib/fetchHelper'
import { getAggregates } from './aggregateActions'

export const getAllVariables = () => (dispatch) => {
  callApi('/api/columns')
    .then((res) => {
      const variables = res.variables.map((variable) => ({
        label: variable.Field,
        value: variable.Field
      }))
      dispatch(saveVariable(variables))
    })
}

const saveVariable = (variables) => ({
  type: 'SAVE_VARIABLES',
  variables
})

export const selectedVariableChanged = (variable) => (dispatch) => {
  dispatch(setSelectedVariable(variable))
  dispatch(getAggregates())
}

const setSelectedVariable = (variable) => ({
  type: 'SET_SELECTED_VARIABLE',
  variable
})