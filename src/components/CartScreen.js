import React from "react";
import styled from "styled-components";
import {
  addProduct,
  removeFromCart,
  addToCart,
  handleQTY,
} from "../Global/actions";
import { useDispatch, useSelector } from "react-redux";

const CartScreen = () => {
  const data = useSelector((state) => state.myReducer.cart);
  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper>
        {data?.map((props) => (
          <Card>
            <Image src={props.image} />
            <Content>
              <Title>{props.title}</Title>
              <Desc>desc</Desc>
              <Price>
                <span>{Math.ceil(props.price * props.QTY)}</span>
                {/* <Button bg>Add to Cart</Button> */}
                <InputQTY>
                  <Div
                    bg
                    onClick={() => {
                      console.log("Heelo");
                      dispatch(handleQTY(props));
                    }}
                  >
                    -
                  </Div>
                  <MyValue>{props.QTY}</MyValue>
                  <Div
                    onClick={() => {
                      dispatch(addToCart(props));
                    }}
                  >
                    +
                  </Div>
                </InputQTY>
                <Button
                  // disabled={props.QTY === 1}
                  onClick={() => {
                    dispatch(removeFromCart(props));
                  }}
                >
                  Remove From Cart
                </Button>
              </Price>
            </Content>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default CartScreen;

const MyValue = styled.div``;
const Div = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${({ bg }) => (bg ? "red" : "green")};
  border-radius: 50%;

  :hover {
    cursor: pointer;
  }
`;
const InputQTY = styled.div`
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const Button = styled.button`
  margin-right: 10px;
  height: 40px;
  width: 100px;
  outline: none;
  border: 0;
  background-color: ${({ bg }) => (bg ? "#397546" : "red")};
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
  height: 500px;
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
  height: 240px;
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

  span {
    font-weight: bold;
  }
`;
