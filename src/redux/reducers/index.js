import { combineReducers } from 'redux'

import { navigation } from './navigation'
import { chart } from './chart'


export const rootReducer = combineReducers({
  navigation,
  chart,
})
