import React, { Component } from 'react'
import styled from 'styled-components';

const ModalStyle = styled.div`
background-color:#5fa8f3
border-radius: 3px;
border: 1px solid #9CC8F6;
position: absolute;
display:flex;
flex-direction:column;
flex-wrap:wrap;

width:50%;
min-height:350px;
max-height:550px;
max-width:700px;
min-width:352px;
align-content:center;
align-self:center

`;

const ApplyBtn = styled.button`
justify-self:center;
background-color:#003f80;
margin:auto;
width:"150px";
color:#f3f9f3
width:100px;
border:none
&:hover {
    background-color:#1a1718;
    box-shadow: 2px 4px #4f4c4d;
}

`;


export default class Modal extends Component {

    
    render() {
        
       let Requirements; 
       let Responsiblities; 
   if(this.props.job_details){
       if(this.props.job_details.requirements){
        Requirements = <div style={{display:"block"}}>
            <p style={{fontWeight:"bold"}}>Requirements:</p>
            <p >{this.props.job_details.requirements}</p>
            </div>
       }
       if(this.props.job_details.responsibilities){
        Responsiblities =<div>
<p style={{fontWeight:"bold"}}>Responsiblities:</p>
<p>{this.props.job_details.responsibilities}</p>
        </div>
        
       
       }
    

   }else{
       Responsiblities = <p style={{color:"black"}}>Nothing to display</p>
   }

        return (
            <div id="modal_container">
            <ModalStyle>
                <div style={{
                height:"100%", width:"100%",
                display:"flex",
                flexDirection:"row",
                overflow:"hidden",
flexWrap:"wrap" ,
minWidth:"350px" 

                
            
            
            }}>
                     <button  onClick={()=>{
                    this.props.closeModal();
                
                   
                    
                }} style={{ maxWidth:"30px", marginRight:"auto",backgroundColor:"transparent", border:"none"  }}>X</button>
                <div style={{width:"100%", height:"calc(100% - 30px)",display:"flex",flexDirection:"column", justifyContent:"center", alignContent:"center"}} >

            <div style={{ display:"flex", flexDirection:"column", 
            height:"95%",width:"100%",
            margin:"auto", justifyContent:"center", paddingBottom:"15px",
           
            }}>
                

                <div style={{margin:"auto", width:"100%",marginTop:"10px", maxHeight:"345px", flex:1, display:"flex",border:"1px solid #ccc", marginBottom:"10px", color:"#1a1718",
            
            wordBreak:"break-word", overflowWrap:" break-word",overflow:"scroll",    padding:"15px", justifyContent:"center"
            
            
            }}>

  <div id="inner_info" style={{paddingTop:"25px"}}>
  {Responsiblities}
{Requirements}

      
      </div>         
            </div>

                <ApplyBtn>Apply Now</ApplyBtn>
            

            </div>



            </div>
            </div>
            </ModalStyle>
            </div>
        )
    }
}
