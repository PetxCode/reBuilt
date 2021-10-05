import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

export const HeaderWil = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <Navigation>
          <Nav>Home</Nav>
          <Nav>About</Nav>
          <Nav>Contact</Nav>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

const Logo = styled.img`
  width: 200px;
  height: 80px;
  object-fit: contain;
  margin: 0 30px;
  cursor: pointer;
`;

const Navigation = styled.div`
  margin-right: 30px;
  display: flex;
`;

const Nav = styled.div`
  margin: 0 30px;
  font-size: 30px;
  font-weight: bolder;
  transition: all 200ms;

  :hover {
    color: #f19a33;
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
    rgb(0 0 0 / 43%) 0px 16px 10px -10px;
  z-index: 10;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
