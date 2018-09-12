import createReducer from '../lib/create-reducer'

const initialState = {
  list: [],
  selectedVariable: 'education'
}

export default createReducer(initialState, {
  SAVE_VARIABLES: (state, { variables }) => ({
    ...state,
    list: variables
  }),
  SET_SELECTED_VARIABLE: (state, { variable }) => ({
    ...state,
    selectedVariable: variable
  })
})