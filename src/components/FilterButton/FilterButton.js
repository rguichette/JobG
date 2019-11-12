import styled from 'styled-components';
import React, {Component} from 'react';

const Button = styled.button`
background-color:#003F80;
color:#f3f9fe;
border-radius: 3px;
border: 2px solid #0277F0;
margin: 12px;
padding: 0.25em 1em;

display:flex;
flex-basis:0;
&:hover{
  background-color: #1a1718;
  box-shadow: 3px 3px #4f4c4d;
 
}

`;




export default class FilterButton extends Component {
  render() {
    
    return (
      <div>
       <Button onClick={()=>{
         let filterType = this.props.children
         this.props.selectFilter(filterType)
       }}>{this.props.children}</Button> 
      </div>
    )
  }
}



















