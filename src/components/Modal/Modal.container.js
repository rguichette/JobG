import { connect } from 'react-redux'
import Modal from './Modal'


const mapStateToProps = state => {

    return {
      jobList: state.data,
      jobCategory: state.filter.category,
      toggled: state.data.toggled,
      job_details: state.data.details
    }
  }
  
  const mapDispatchToProps = dispatch => {
      // console.log("closing");
      
    return {
        closeModal: () => {
            dispatch({type:"VIEW_MODAL", toggled:false})
           }

    }
  }
  
 const ModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Modal)
  
  export default ModalContainer