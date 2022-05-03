import React from "react";
import { Container } from "react-bootstrap";

const Header = ({ title }) => {
  return (
    <>
      <style type="text/css">
        {`
    #head1 {
      background-color: light-blue;
      color: gray;
      margin-top: 100px;
      margin-bottom: 100px;
      text-align: center;
      
      
    }

    
    `}
      </style>
      <Container id="head1">
        <h1>Listing all the things I hate</h1>
      </Container>
    </>
  );
};
export default Header;
