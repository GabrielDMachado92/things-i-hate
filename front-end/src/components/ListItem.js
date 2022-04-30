import React from "react";
import { Container, ListGroup, Badge, Alert } from "react-bootstrap";

const ListItem = ({ listItems }) => {
  return (
    <Container>
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">Cras justo odio</div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};
export default ListItem;
