import React, { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ListItem from "./components/ListItem";

function App() {
  const [listItems, setListItems] = useState([]);
  const [item, setItem] = useState("");

  const handleAddSubmit = (e) => {
    e.preventDefault();
    console.log(item);
    setListItems([...listItems, item]);
    console.log(listItems);
    setItem("");
  };

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
            <AddItem
              item={item}
              setItem={setItem}
              handleSubmit={handleAddSubmit}
            />
          </Col>
        </Row>

        {listItems.length ? (
          <Row>
            <Col>
              <ListItem />
            </Col>
          </Row>
        ) : (
          <Alert key="success" variant="success">
            Congrats, you have nothing to hate.
          </Alert>
        )}
      </Container>
    </div>
  );
}

export default App;
