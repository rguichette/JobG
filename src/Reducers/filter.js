import { FILTER_CATEGORY } from "../Actions/filter";


// let initialState = {

// }

export function filter(state, action) {
 if(state === undefined){
     return {
         type: FILTER_CATEGORY,
         category:"All"
     }
 }
  switch (action.type) {
      case FILTER_CATEGORY: 
      //
          return Object.assign({}, state, {
         
            category:action.category
          })
  
      default:
        return state;
          
  }

  }