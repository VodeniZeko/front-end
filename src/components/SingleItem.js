import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const SingleItem = ({ products }) => {
  const { item_name, img, description, condition, location } = products;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant='top' src={img} />
      <Card.Body>
        <Card.Title>{item_name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>condition: {condition}</ListGroupItem>
        <ListGroupItem>Location: {location}</ListGroupItem>
        <ListGroupItem>more text</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href='#'>Card Link</Card.Link>
        <Card.Link href='#'>Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default SingleItem;
