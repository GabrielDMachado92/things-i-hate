import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ListItem from "./components/ListItem";

function App() {
  const [item, setItem] = useState("");

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <AddItem />
          </Col>
        </Row>
        <Row>
          <Col>
            <ListItem />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
