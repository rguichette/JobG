//handling overview of main componentent. Only the WHOLE page was build here
import React from 'react';

import { Provider } from 'react-redux'

import ReactPlayer from 'react-player'


// import "../node_modules/video-react/dist/video-react.css"; // import css



import jobGetLogo from "./img/jobget-logo-white.png"


import Button from './components/FilterButton'
import JobsContainer from './components/Jobs'

import './App.css';
import configureStore from './store';
import Footer from './components/Footer';





function App() {
const videoLink = "https://www.youtube.com/watch?time_continue=4&v=zDdhnNxgjsw&feature=emb_title"


  return (

    <Provider store={configureStore()}>
        
   
<div>

  <div className="intro">
    
  
     <img className={"job_get_logo"} src={jobGetLogo} alt="" width={"100px"}/>

    <div className={"quick_outline_group"}>
        <div className={"quick_outline"}>
          <p >At vero eos et accusamus et iusto odio dignissimos ducimus
          </p>
          <button id={"all_postings_btn"} onClick={()=>{

            
          }}> 
        <a href="#career_postings">view open posisions</a>
          </button>
        </div>
    </div>
  </div>

  <div className="culture_section">
    <p style={{marginLeft:"30px"}}>Culture</p>
    <p id="mission">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,</p>


  <div className="video_section"> 


  <ReactPlayer className='react-player' url={videoLink}  width={"100%"}
            height={"100%"} youtubeConfig={{ playerVars: { showinfo: 1,
  controls:1,modestbranding:1 } }}
  />

  </div>

  </div>



  <div className="career_section" id="career_postings">
  <p id="passion">
  What's your passion? Check out all our open spots below.
  </p>
  <div className="filter_list">
    <Button>All</Button>
    <Button>Design</Button>
    <Button>Engineering</Button>
    <Button>Marketing</Button>
    <Button>Finance</Button>
  </div>

  <JobsContainer/>
</div>

<Footer id="footer"/>


</div>

</Provider>

  );
}

export default App;
