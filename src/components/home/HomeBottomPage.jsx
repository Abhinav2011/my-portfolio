import React from "react";
import avatar from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FiDownloadCloud } from "react-icons/fi";
import { Button } from "@mui/material";

const resumeURL = "https://drive.google.com/file/d/1ahsxf-lCTFqqF5amadW83EXtsNSWt8G5/view?usp=sharing";

const HomeBottomPage = () => {

  return (
    <div className="homeBottom" >
      <h1 style={{ fontSize: "2.6rem", marginBottom: "3.5rem" }}>
        Some Things <span style={{ color: "#32CD30" }}>About Me</span>
      </h1>
      <div className="introduction">
        <div className="intro-text">
          <p>
            I am Abhinav Kumar, currently interning at{" "}
            <span style={{ color: "#32CD30" }}>JP Morgan Chase</span> as a
            Software Engineer
          </p>
          <br />
          <p>
            I love working as a <span style={{ color: "#32CD30" }}>Full Stack Developer</span> and My tech stack includes
            NodeJs, SpringBoot, React, TypeScript. I am also familar with AWS and
            Docker.
          </p>
          <br />
          <p>
            I am also proficient in C++, Java and love <span style={{ color: "#32CD30" }}>solving problems</span> involving data structures and algorithms.
          </p>
          <br />
          <p>
            I love making side projects and learn about new{" "}
            <span style={{ color: "#32CD30" }}>technologies</span>.
          </p>
          <br />
          <p>
            Checkout my <span style={{ color: "#32CD30" }}>resume</span> for more about me.{" "}
          </p>
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
      <div className="downloadPdf">
        <a
          href={resumeURL}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant="contained"
            color="success"
            endIcon={<FiDownloadCloud />}
            style={{ marginBottom: "50px" }}
          >
            Resume
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HomeBottomPage;
