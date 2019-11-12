export function data(state={}, action) {
 
  switch (action.type) {
      case "GRABBED_DATA":
          
      return Object.assign({}, state, {
         
        jobs: action.data.jobs
      });

      case "VIEW_MODAL":
        console.log("this action is", action);
        
        return Object.assign({}, state, {
         
          toggled: action.toggled,
          details:action.job_details
        });

  
      default:
          return state
  }

  }