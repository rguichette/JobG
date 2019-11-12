import styled from 'styled-components';
import React, {Component} from 'react';



const CardStyle = styled.div`
background-color:#288bf2;
border-radius: 3px;
border: 1px solid #9CC8F6;
padding: 0.25em 1em;
width:230px;
height:150px;
align-content:center;


display: flex;
     flex-wrap: wrap;
     
     position: relative;
&:hover{
    
}
`;

const JobMainText = styled.p`
color:#f3f9fe;
font-size:15px;

`

export default class JobCard extends Component {
    


    render() {

       
        
        let jobLocation = this.props.location === "Remote" ? this.props.location : `${this.props.location.city}, ${this.props.location.state}`
        return (
            <div className="job_Card">
               <CardStyle>
<JobMainText >{this.props.jobTitle}</JobMainText>
<JobMainText id="location">{jobLocation}</JobMainText>
<p id="more_info" onClick={()=>{

     this.props.openModal(this.props.details)
  
    
    
}} >learn more</p>

                   </CardStyle> 
            </div>
        )
    }
}











