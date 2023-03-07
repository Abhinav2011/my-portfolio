import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { BsGithub } from "react-icons/bs";

const SingleProjectCard = ({ projectDetails }) => {
  const { title, description, image, projectLink } = projectDetails;

  return (
    <Card className="single-card">
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={projectLink}>
          <Button>
            <div className="github-button">
              <BsGithub /> Github Link
            </div>
          </Button>
        </a>
      </Card.Content>
    </Card>
  );
};

export default SingleProjectCard;
