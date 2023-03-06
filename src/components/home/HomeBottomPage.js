import React from "react";
import avatar from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";

const HomeBottomPage = () => {
  return (
    <div className="homeBottom">
      <h1 style={{fontSize:"2.6rem",marginBottom:"3.5rem"}}>Some Things <span style={{color:"purple"}}>About Me</span></h1>
      <div className="introduction">
        <div className="intro-text">
          <p align="left">
            I am Abhinav Kumar, currently interning at JP Morgan Chase as a
            Software Engineer
          </p>
          <br />
          <p align="left">
            I love working as a Full Stack Developer and My tech stack includes
            NodeJs, SpringBoot, React, TypeScript.I am also familar with AWS and
            Docker.
          </p>
          <br />
          <p align="left">
            I love making side projects and learn about new technologies.
          </p>
          <br />
        </div>
        <div className="intro-image">
          <Tilt>
            <img
              class="rounded w-36 h-36"
              src={avatar}
              alt="Extra large avatar"
            ></img>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default HomeBottomPage;
