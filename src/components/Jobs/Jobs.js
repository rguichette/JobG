import React, { Component } from 'react'
import JobCard from '../JobCard'
import Modal from '../Modal';



//whole jobs section
export default class Jobs extends Component {


    
    render() {
        let Madal = this.props.toggled ? <Modal/> :null;

        let propCat = this.props.jobCategory
        
        var Joblist = this.props.jobList.jobs.map((job,i)=>{
            if(propCat ==="All"){
                return <JobCard key={i} category={job.category} jobTitle={job.title} location={job.location} details={job.details} />


            }
            if(propCat === job.category){
                return <JobCard key={i} category={job.category} jobTitle={job.title} location={job.location} />

            }

            return null;

        })
    
        return (
            <div className="job_list_container">
                
         <div className={"job_list_sub"}>{Joblist}</div>
{Madal}
            </div>
        )
    }
}
