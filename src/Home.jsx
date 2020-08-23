import React from 'react';

import bro from '../src/images/bro.jpg';
import Common from './Common';


const Home = () =>{
  return(
    <>
     <Common name="Grow your business with" imgsrc={bro} visit="/services" btnname="Get Started"/>
    </>
  )
}

export default Home;
