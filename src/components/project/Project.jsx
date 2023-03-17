import React, { useEffect, useState } from "react";
import SingleProjectCard from "./SingleProjectCard";
import projectData from "./ProjectData";
import { Card } from "semantic-ui-react";
const Project = () => {
  const [width,setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  },[width]);


  
  return (
    <div className="projects">
      <h1
        style={{
          marginTop: "3rem",
          fontFamily: "Fira Code",
          fontWeight: "bold",
        }}
      >
        My Recent <span style={{ color: "#32CD30" }}>Projects</span>
      </h1>
      <p>These are some of the projects that I have been working on my own time!!</p>
      <div className="project-cards">
        <Card.Group itemsPerRow={width > 786 ? 3 : 1}>
          {projectData.map((data, index) => {
            return <SingleProjectCard
              className="card"
              key={index}
              projectDetails={data}
            />;
          })}
        </Card.Group>
      </div>
    </div>
  );
};

export default Project;
