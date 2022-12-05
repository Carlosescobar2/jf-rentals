import React from "react";
import FrontTrailerImg from "../../assets/FrontTrailerImg.jpeg";
import "./Home.scss";
const Home = () => {
  return (
    <div id="HomeSection" className="home-section">
      <img src={FrontTrailerImg} />
    </div>
  );
};

export default Home;
