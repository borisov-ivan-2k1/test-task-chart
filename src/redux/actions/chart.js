export let setData = (data) => {
  return dispatch => {
    dispatch({
      type: 'GET_DATA_SUCCESS',
      payload: data,
    })
  }
}
