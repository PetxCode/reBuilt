import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { totalValue } from "../Global/actions";
import { Link } from "react-router-dom";

const HeaderScreen = () => {
  const data = useSelector((state) => state.myReducer.cart);
  const dataValue = useSelector((state) => state.myReducer.totalValuePrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalValue());
  }, [data]);
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <Navigation>
          <Nav to="/">Home</Nav>
          <Nav to="/cart">
            Cart
            <span>{data.length}</span>
          </Nav>
          <Nav>
            Total Cost
            <span>${Math.ceil(dataValue)}</span>
          </Nav>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default HeaderScreen;

const Logo = styled.img`
  width: 200px;
  height: 60px;
  margin-left: 20px;
  margin-right: 20px;
  object-fit: contain;
`;
const Navigation = styled.div`
  display: flex;
`;
const Nav = styled(Link)`
  margin: 0 30px;
  transform: scale(1);
  transition: all 350ms;
  text-decoration: none;
  color: white;

  span {
    font-weight: bold;
    margin: 0 5px;
    font-size: 17px;
    color: white;
  }

  :hover {
    transform: scale(1.06);
    cursor: pointer;
    font-weight: bold;
    color: white;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #397546;
  position: fixed;
  color: white;
  z-index: 10;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;
