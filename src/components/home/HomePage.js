import React from "react";
import TypeAnimation from "./TypeAnimation";
import HomeBottomPage from "./HomeBottomPage";
import ParticleBackground from "./ParticleBackground";
import developer from "../../assets/developer.svg";

const HomePage = () => {
  return (
    <div className="home">
      <ParticleBackground />
      <div className="home-parent">
        <div className="home-content">
          <div className="heading-text">
            <h1 style={{ fontFamily: "Fira Code", fontSize: "2.5rem", position:"static"}}>HI</h1>
            <h1 style={{ fontFamily: "Fira Code", fontSize: "2.5rem",position:"static" }}>
              I'M <span style={{ color: "purple",position:"static" }}>ABHINAV KUMAR</span>
            </h1>
          </div>
          <div className="text-animation">
            <TypeAnimation />
          </div>
        </div>
        <img
          style={{ width: "25%", height: "100vh", }}
          class="rounded w-36 h-36"
          src={developer}
          alt="Extra large avatar"
        ></img>
      </div>
      <HomeBottomPage />
    </div>
  );
};

export default HomePage;
