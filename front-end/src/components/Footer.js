import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const Footer = ({ title }) => {
  return (
    <>
      <style type="text/css">
        {`
  
  `}
      </style>
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col>
            <h4>Gabriel Machado Portfolio</h4>
            <div>
              gabriel.d.machado92@gmail.com <br />
            </div>
          </Col>
          <Col>
            <div>
              <a
                href="https://github.com/GabrielDMachado92/"
                target={"_blank"}
                rel="noreferrer"
              >
                Github
              </a>
              <br></br>
              <a
                href="https://www.linkedin.com/in/gabrieldmachado/"
                target={"_blank"}
                rel="noreferrer"
              >
                Linked-In
              </a>
            </div>
            <div>Venha conversar comigo em minhas redes sociais</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Footer;
