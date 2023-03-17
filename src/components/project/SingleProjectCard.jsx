import React from "react";
import { Button, Card, Image} from "semantic-ui-react";
import { BsGithub } from "react-icons/bs";

const SingleProjectCard = ({ projectDetails }) => {
  const { title, description, image, projectLink } = projectDetails;

  return (
    <Card className="single-card">
      <Image className="projectCard-image" src={image} wrapped ui={false} />
      <Card.Content className="single-card-content">
        <Card.Header style={{fontSize:"2rem"}}>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={projectLink}>
          <Button className="single-card-button">
            <div className="github-button">
              <BsGithub style={{marginRight:"1rem"}}/> Github Link
            </div>
          </Button>
        </a>
      </Card.Content>
    </Card>
  );
};

export default SingleProjectCard;
