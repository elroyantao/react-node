import { callApi } from '../lib/fetchHelper'

export const getAggregates = () => (dispatch, getState) => {
  const selectedVariable = getState().variables.selectedVariable

  const aggregate = getState().aggregates.list[selectedVariable]

  if (aggregate) return

  dispatch(toggleLoading(true))
  callApi(`/api/aggregate/?column=${selectedVariable}`)
    .then((res) => {
      dispatch(saveAggregate(res.aggregate, selectedVariable))
      dispatch(toggleLoading(false))
    })
}

const saveAggregate = (aggregate, variable) => ({
  type: 'SAVE_AGGREGATE_LIST',
  aggregate,
  variable
})

const toggleLoading = (loading) => ({
  type: 'TOGGLE_LOADING',
  loading
})