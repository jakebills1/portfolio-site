import React from "react";
import CircleImage from "./CircleImage";
import SocialLinks from "./SocialLinks";
import Info from "./Info";
const Home = () => {
  return (
    <div className="mainContainer">
      <h1 className="hero">Jake Bills | Web Developer</h1>
      <CircleImage />
      <Info />
      <SocialLinks />
    </div>
  );
};
export default Home;
