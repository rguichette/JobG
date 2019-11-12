import { connect } from 'react-redux'
import {filterCategory } from '../../Actions/filter'
import Jobs from './Jobs'


const mapStateToProps = state => {

    return {
      jobList: state.data,
      jobCategory: state.filter.category,
      toggled: state.data.toggled
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      selectFilter: category => {
       dispatch(filterCategory(category))
      }
      

    }
  }
  
  export const JobsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Jobs)
  