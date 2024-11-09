import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <hr/>
      <div className="mt-20">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
        exercitationem dolores culpa perferendis commodi, harum voluptas est,
        suscipit aliquid corrupti ducimus voluptatibus! Sed illo sapiente illum
        exercitationem maxime pariatur eum magni est ullam. Voluptate itaque
        expedita totam dignissimos deserunt error necessitatibus. Voluptatum,
        vel quaerat magni repudiandae ex laborum ipsum est.
      </p>
      </div>
      <div className="mt-40">
       <Footer/>
      </div>
    </>
  );
}

export default About;
