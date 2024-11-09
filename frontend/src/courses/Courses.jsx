import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import Course from "../components/course";
import list from "../../public/list.json";

function Courses() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
    <Course/>
    </div>
    <Footer/>
    </>
  );
}

export default Courses;
