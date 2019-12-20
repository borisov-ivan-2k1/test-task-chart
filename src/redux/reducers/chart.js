export const initialState = {
  data: {},
}

export let chart = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_SUCCESS':
      return { ...state, data: action.payload }

    default:
      return state
  }
}
