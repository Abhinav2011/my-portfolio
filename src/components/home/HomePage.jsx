import React from "react";
import TypeAnimation from "./TypeAnimation";
import HomeBottomPage from "./HomeBottomPage";
import developer from "../../assets/developer.svg";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-parent">
        <div className="home-content">
          <div className="heading-text">
            <h1
              style={{
                fontFamily: "Fira Code",
                fontSize: "2.5rem",
                position: "static",
              }}
            >
              HI
            </h1>
            <h1
              style={{
                fontFamily: "Fira Code",
                fontSize: "2.5rem",
                position: "static",
              }}
            >
              I'M{" "}
              <span
                style={{
                  color: "#32CD30",
                  position: "static",
                  textDecoration: "",
                }}
              >
                ABHINAV KUMAR
              </span>
            </h1>
          </div>
          <div className="text-animation">
            <TypeAnimation />
          </div>
        </div>
        <img
          className="rounded w-36 h-36 homepage-avatar"
          src={developer}
          alt="Extra large avatar"
        ></img>
      </div>
      <HomeBottomPage />
    </div>
  );
};

export default HomePage;
