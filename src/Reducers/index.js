import { combineReducers } from 'redux'


import {filter} from "./filter";
import {data} from './data'

const defaultReducer = function(state, action){
    if(state === undefined){
        return {}
    }
    return null;
}


const rootReducer = combineReducers({
    defaultReducer,
    filter,
    data
  })

  export default rootReducer