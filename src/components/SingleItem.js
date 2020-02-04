import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const SingleItem = ({ products }) => {
  const { name, image } = products;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>whatever the description of the item</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>some other text</ListGroupItem>
        <ListGroupItem>more text</ListGroupItem>
        <ListGroupItem>more text</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default SingleItem;
