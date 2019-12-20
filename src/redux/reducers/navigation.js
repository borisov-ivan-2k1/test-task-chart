import { SET_TYPE } from '../actions/navigation'

export const initialState = {
  type: 'days',
}

export let navigation = (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPE:
      return { ...state, type: action.payload }

    default:
      return state
  }
}
