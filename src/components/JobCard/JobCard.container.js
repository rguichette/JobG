import { connect } from 'react-redux'
import JobCard from './JobCard.js'


const mapStateToProps = state => {
  
    return {
      
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      
      openModal: (job_details) => {        
       dispatch({type:"VIEW_MODAL", toggled:true, job_details})
      }
    }
  }
  
  export const MainJobCard = connect(
    mapStateToProps,
    mapDispatchToProps
  )(JobCard)
  
