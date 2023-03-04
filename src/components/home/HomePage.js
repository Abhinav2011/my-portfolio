import React from "react";
import TypeAnimation from "./TypeAnimation";
import HomeBottomPage from "./HomeBottomPage";

const HomePage = () => {
  return (
    <div>
      <div className="home-content">
        <div className="heading-text">
          <h1 style={{ fontFamily: "Fira Code", fontSize: "2.5rem" }}>HI</h1>
          <h1 style={{ fontFamily: "Fira Code", fontSize: "2.5rem" }}>
            I'M ABHINAV KUMAR
          </h1>
        </div>
        <div className="text-animation">
          <TypeAnimation />
        </div>
      </div>
      <HomeBottomPage />
    </div>
  );
};

export default HomePage;
