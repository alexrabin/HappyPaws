import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  background-color: #000;
  top: 0;
  left: 0;
  position: sticky;

  * {
    float: left;
  }
  a {
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
`;

const Title = styled(Link)`
  color: white;
  font-weight: bold;
`;

const BarLink = styled(Link)`
  :hover {
    background-color: #ddd;
    color: black;
  }
`;
const NavigationBar = () => {
  return (
    <Container>
      <Title className="noselect" href="/">
        Happy Paws
      </Title>
    </Container>
  );
};

export default NavigationBar;
