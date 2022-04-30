import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const AddItem = () => {
  return (
    <Container>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formItem">
              <Form.Control
                type="text"
                placeholder="What do you hate the most today?"
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
