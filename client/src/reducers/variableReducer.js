import createReducer from '../lib/create-reducer'

const initialState = {
  list: []
}

export default createReducer(initialState, {
  SAVE_VARIABLES: (state, { variables }) => ({
    ...state,
    list: variables
  })
})