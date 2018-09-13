import createReducer from '../lib/create-reducer'

const initialState = {
  list: {},
  loading: false
}

export default createReducer(initialState, {
  SAVE_AGGREGATE_LIST: (state, { aggregate, variable }) => ({
    ...state,
    list: {
      ...state.list,
      [variable]: aggregate
    }
  }),
  TOGGLE_LOADING: (state, { loading }) => ({
    ...state,
    loading
  })
})