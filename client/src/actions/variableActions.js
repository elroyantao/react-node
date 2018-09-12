import { callApi } from '../lib/fetchHelper'

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

export const setSelectedVariable = (variable) => ({
  type: 'SET_SELECTED_VARIABLE',
  variable
})