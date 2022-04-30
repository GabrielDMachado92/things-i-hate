import React from "react";
import { Container, ListGroup, Badge, Alert } from "react-bootstrap";

const ListItem = ({ item }) => {
  return (
    <Container>
      <ListGroup as="ul">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">{item}</div>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};
export default ListItem;
