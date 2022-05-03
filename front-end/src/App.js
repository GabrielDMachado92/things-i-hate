import React, { useState } from "react";
import { Container, Row, Col, Alert, ListGroup } from "react-bootstrap";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ListItem from "./components/ListItem";
import Footer from "./components/Footer";

function App() {
  const [listItems, setListItems] = useState([]);
  const [item, setItem] = useState("");

  const API_URL = "http://127.0.0.1:5030";

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };

    console.log(item);
    fetch(`${API_URL}/word`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setListItems([...listItems, item]);
      })
      .catch((err) => {
        console.log(err);
      });
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

        <Container className="mt-4">
          {listItems.length ? (
            <ListGroup>
              {listItems.map((item, i) => (
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                  key={i}
                >
                  <ListItem item={item} />
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <Alert key="success" variant="success">
              Congrats, you have nothing to hate.
            </Alert>
          )}
        </Container>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
