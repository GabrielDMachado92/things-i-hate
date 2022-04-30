import React from "react";
import { Container } from "react-bootstrap";

const navbarStyle = {
  backgroundColor: "lightblue",
};

const Header = ({ title }) => {
  return (
    <Container>
      <h1>Listing all the things I hate</h1>
    </Container>
  );
};
export default Header;
