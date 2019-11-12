//all "functions" are here
import { connect } from 'react-redux'
import {filterCategory } from '../../Actions/filter'
import FilterButton from './FilterButton.js'


const mapStateToProps = state => {

    return {

    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      selectFilter: category => {
       dispatch(filterCategory(category))
      }
    }
  }
  
  export const FilterBtn = connect(
    mapStateToProps,
    mapDispatchToProps
  )(FilterButton)
  
//   export default FilterBtn