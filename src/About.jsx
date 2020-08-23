import React from 'react';

import la from '../src/images/la.jpg';

import Common from './Common';



const About = () =>{
  return(
    <>
     <Common name="Welcome to About Page"  imgsrc={la} visit="/contact" btnname="Contact Now"/>
   
    </>
  )
}

export default About;

