import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  removeFromCart,
  addToCart,
  handleQTY,
} from "../Global/actions";

const DetailScreen = () => {
  const data = useSelector((state) => state.myReducer.details);
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        <Card>
          <Image src={data.image} />
          <Content>
            <Title>{data.title}</Title>
            <Desc>desc</Desc>
            <Price>
              <span>{data.price}</span>
              <Button
                onClick={() => {
                  dispatch(addToCart(data));
                }}
              >
                Add to Cart
              </Button>
            </Price>
          </Content>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default DetailScreen;

const Button = styled.button`
  margin-right: 10px;
  height: 40px;
  width: 100px;
  outline: none;
  border: 0;
  background-color: #397546;
  border-radius: 3px;
  color: white;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: lightgray;
  padding-top: 100px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  width: 300px;
  margin: 20px;
  border-radius: 5px;
  height: 400px;
  border: 2px solid gray;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    transform: scale(1.01);
    border: 2px solid black;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 250px;
  background-color: red;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
`;
const Content = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  height: 140px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 22px;
  margin: 10px 0;
`;
const Desc = styled.div`
  flex: 1;
`;
const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
