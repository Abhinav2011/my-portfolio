import React from "react";
import TechStack from "./TechStack";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import codeImage from "../../assets/coder.svg";
import GitHubCalendar from "react-github-calendar";

const AboutInfo = () => {
  return (
    <div className="about">
      <h1
        style={{
          marginTop: "3rem",
          fontFamily: "Fira Code",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "purple" }}>About</span> Me
      </h1>
      <div className="about-parent">
        <div className="about-text">
          <p style={{ textAlign: "justify" }}>
            Hi people, I am{" "}
            <span style={{ color: "purple", fontWeight: "bold" }}>
              Abhinav Kumar
            </span>{" "}
            from Jamshedpur,India. I did my B.Tech in Information Technology
            from{" "}
            <span style={{ color: "purple", fontWeight: "bold" }}>
              VIT Vellore
            </span>{" "}
            and currently I'm interning at{" "}
            <span style={{ color: "purple", fontWeight: "bold" }}>
              JP Morgan Chase & Co
            </span>
            .
          </p>
          <br></br>
          <p style={{ textAlign: "justify" }}>
            Apart from developement, some things I like are<br></br>
            <br></br>
            <ul>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Watching Table Tennis
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Gardening
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Travelling
              </li>
            </ul>
          </p>
        </div>
        <img
          style={{ width: "45%" }}
          class="rounded"
          src={codeImage}
          alt="Extra large avatar"
        ></img>
      </div>
      <TechStack />
      <h1
        style={{
          marginTop: "3rem",
          fontFamily: "Fira Code",
          fontWeight: "bold",
        }}
      >
        My <span style={{color:"purple"}}>Github</span> Contribution Graph
      </h1>
      <br></br>
      <div className="github-graph">
        <GitHubCalendar
          username="Abhinav2011"
          blockMargin={6}
          blockSize={12}
          fontSize={16}
        />
      </div>
    </div>
  );
};

export default AboutInfo;
