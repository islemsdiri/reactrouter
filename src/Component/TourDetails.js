import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
const TourDetails = (props) => {
  const tourFounded = props.Tours.find(
    (Tours) => Tours.id == props.match.params.idTour
  );
  return (
    <>
      <Link to="/Tour">
        {" "}
        <Button secondary>return to list </Button>
      </Link>

      <Card>
        {console.log(tourFounded)}
        <Image src={tourFounded.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{tourFounded.name}</Card.Header>
          <Card.Meta>
            <span className="date"> {tourFounded.status}</span>
          </Card.Meta>
          <Card.Description>{tourFounded.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    </>
  );
};

export default TourDetails;