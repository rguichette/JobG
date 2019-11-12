import React, {Component} from 'react';
// import styled, {css} from 'styled-components';
const jgLogo = require('../../img/jobget-logo-transparent.png')
const mcBost = require("../../img/masschallenge-boston-finalist.png")
const MITLogo = require("../../img/MIT_IIC_logo.png")







export default class Footer extends Component {
    render() {
        return (
            <div className={"footer_devider"}>
             <footer className="footer_6 pt-80 pb-80 text-center text-sm-left" style={{backgroundColor: "#F1F1F1"}}>
  <div className="container px-xl-0">
    <div className="row">
      <div className="mb-30 mb-lg-0 col-lg-3 col-sm-6 order-0">
        <img src={jgLogo} alt="" style={{width:"89px", marginBottom: "25px", marginTop:"10px"}}/>
        <div><a href="/privacypolicy.html" className="link color-main">Privacy Policy</a></div>
        <div><a href="/termsconditions.html" className="link color-main">Terms &amp; Conditions</a></div>
        <div><a href="/blog/" className="link color-main">Blog</a></div>
        <div><a href="/press/" className="link color-main">Press</a></div>
      </div>
      <div className="mb-50 mb-sm-0 col-lg-3 col-sm-6 order-2 order-lg-0">
        <div className="mb-25 f-14 semibold text-uppercase sp-20 title">Contact</div>
        <div className="text-adaptive">
          21 Drydock Ave<br/> 
          Boston, MA <br/> 
        </div>
        <div className="text-adaptive">
          <a href="mailto: support@jobget.com">support@jobget.com</a>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 order-3 order-lg-0" style={{textAlign: "center"}}>
        <img src={mcBost} alt="" style={{width: "125px", padding: "10px"}}/>
        <img src={MITLogo} alt="" style={{width: "125px", padding: "10px"}}/>
      </div>
      <div className="mb-50 mb-lg-0 col-lg-3 col-sm-6 text-lg-right order-1 order-lg-0" style={{textAlign: "center"}}>
        <div className="socials">
          <a href="https://twitter.com/JobGetApp" className="f-18 link color-main mr-15"><i className="fab fa-twitter"></i></a>
          <a href="https://www.facebook.com/JobGetApp" className="f-18 link color-main mx-15"><i className="fab fa-facebook-square"></i></a>
          <a href="https://www.instagram.com/jobgetapp" className="f-18 link color-main mx-15"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/jobget/" className="f-18 link color-main mx-15"><i className="fab fa-linkedin"></i></a>
        </div>
        <a href="https://itunes.apple.com/us/app/jobget/id1436462309">
          <img src="https://www.jobget.com/img/app-store-logo.png" alt="" style={{width: 150 + "px", marginTop:20 + "px"}}/>
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.jobget">
          <img src="https://www.jobget.com/img/play-store-logo.png" alt="" style={{width:"150px",  marginTop:"20px"}}/>
        </a>
      </div>
    </div>
  </div>
</footer>
            </div>
        )
    }
}
