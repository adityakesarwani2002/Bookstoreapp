import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Freebook from '../components/freebook'


function home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Freebook/>
    <Footer/> 
    </>
  );
}

export default home;
