import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
export const HeaderComp = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <Navigation>
          <Nav>About</Nav>
          <Nav>Menu</Nav>
          <Nav>Contact</Nav>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  z-index: 10;
  width: 100%;
  height: 100px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px;
  position: fixed;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 200px;
  height: 50px;
  object-fit: contain;
  margin-left: 20px;
`;
const Navigation = styled.div`
  margin-right: 20px;
  display: flex;
`;
const Nav = styled.div`
  margin: 0 30px;
  font-weight: 900;
  font-size: 22px;
  transition: all 250ms;

  :hover {
    color: #f19a33;
    cursor: pointer;
  }
`;
