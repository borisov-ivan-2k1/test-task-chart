export const SET_TYPE = 'SET_TYPE'

export let setType = (type) => {
  return {
    type: SET_TYPE,
    payload: type,
  }
}
