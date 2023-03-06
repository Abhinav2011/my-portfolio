import React from "react";
import { Card } from "semantic-ui-react";
import { DiJava, DiJavascript1, DiReact,DiNodejs,DiMongodb, } from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import {SiMysql} from "react-icons/si";
import {BsGit} from "react-icons/bs";
import {FaAws,FaDocker} from "react-icons/fa";

const TechStack = () => {
  return (
    <div className="techstack">
      <h1>
        My <span style={{ color: "purple" }}>SkillSet</span>
      </h1>
      <div className="techstack-row">
        <Card.Group itemsPerRow={5}>
          <Card raised className="item"> <CgCPlusPlus style={{width:"100%",height:"auto",color:""}}/> </Card>
          <Card raised className="item"> <DiJava style={{width:"100%",height:"auto",color:"red"}}/> </Card>
          <Card raised className="item"> <DiJavascript1 style={{width:"100%",height:"auto",color:"purple"}}/> </Card>
          <Card raised className="item"> <DiReact style={{width:"100%",height:"auto",color:"#61DBFB"}}/> </Card>
          <Card raised className="item"> <DiNodejs style={{width:"100%",height:"auto",color:"green"}}/> </Card>
          <Card raised className="item"> <DiMongodb style={{width:"100%",height:"auto",color:"green"}}/> </Card>
          <Card raised className="item"> <SiMysql style={{width:"100%",height:"auto",color:"#00758f"}}/> </Card>
          <Card raised className="item"> <BsGit style={{width:"100%",height:"auto",color:"black"}}/> </Card>
          <Card raised className="item"> <FaAws style={{width:"100%",height:"auto",color:"orange"}}/> </Card>
          <Card raised className="item"> <FaDocker style={{width:"100%",height:"auto",color:"#0db7ed"}}/> </Card>

          
        </Card.Group>
      </div>
    </div>
  );
};

export default TechStack;
