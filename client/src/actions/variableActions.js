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

export const saveVariable = (variables) => ({
  type: 'SAVE_VARIABLES',
  variables
})