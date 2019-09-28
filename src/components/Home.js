import React from "react";
import CircleImage from "./CircleImage";
import SocialLinks from "./SocialLinks";
import Info from "./Info";
import { useWindowWidth } from "../hooks/useWindowWidth";
const Home = () => {
  const width = useWindowWidth();
  return (
    <div className="mainContainer">
      <h1 className="hero">
        Jake Bills {width > 500 ? "|" : <br />} Web Developer
      </h1>
      <CircleImage />
      <Info />
      <SocialLinks />
    </div>
  );
};
export default Home;
