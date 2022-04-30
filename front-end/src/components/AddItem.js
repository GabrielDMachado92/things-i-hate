import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const AddItem = ({ handleSubmit, item, setItem }) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formItem">
              <Form.Control
                type="text"
                placeholder="What do you hate the most today?"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default AddItem;
