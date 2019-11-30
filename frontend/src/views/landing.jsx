import React, { Component } from 'react';


import MyNavbar from "../components/Navbars/MyNavbar";

import LandingJumbo from "../components/LandingJumbo/LandingJumbo";
import LandingFeature from "../components/LandingFeature/LandingFeature";
import LandingFeatureImage from "../components/LandingFeatureImage/LandingFeatureImage";
import LandingToDetailsButton from "../components/LandingToDetailButton/LandingToDetailButton";
import Footer from "../components/Footer/Footer";


const variablesJumbo = {
  image : require("../assets/img/explorer.png"),
  primaryMessage : "Get in the university you ",
  redText: "love",
  secondaryMessage : "Hello, we help you to achieve your dream university by learning from your data such as SATs, ACTs, etc.",
  pricing : "Save your application money"
}

const variablesFeatureImage1 = {
  image : require("../assets/img/glass-boy.png"),
  title : "Graduate in your dream university",
  description : "When you follow our easy actionalble guide, you can gaurantee your entry in the college you desire.",
  high1 : "",
  high2 : "",
  high3 : ""
}

const variablesFeatureImage2 = {
  image : require("../assets/img/wizard-boy.png"),
  title : "It is as simple as swooshing a wand!",
  description : "Just input your latest scores, your list of desired university, and your extracirricular activity",
  high1 : "Simple click results",
  high2 : "Result trained with accurate data",
  high3 : "Easy input fields"
}


class Landing extends React.Component {
  componentDidMount(){
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  
  render() {
    return (
      <>

        <MyNavbar />

        <LandingJumbo inputs = {variablesJumbo}/>
        <LandingToDetailsButton/>
        <LandingFeatureImage inputs = {variablesFeatureImage2} />
        <LandingFeatureImage inputs = {variablesFeatureImage1} />
        <LandingFeature />
        <LandingToDetailsButton />
        <Footer />

      </>
    )
  }
}
export default Landing;
