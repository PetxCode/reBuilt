import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  addProduct,
  removeFromCart,
  addToCart,
  viewDetail,
} from "../Global/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const url = "https://fakestoreapi.com/products";

  const dispatch = useDispatch();
  const data = useSelector((state) => state.myReducer.product);

  const getData = async () => {
    const res = await axios.get(url);
    if (res) {
      dispatch(addProduct(res.data));
    }
  };

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  return (
    <Container>
      <Wrapper>
        {data?.map((props) => (
          <Card>
            <Image src={props.image} />
            <Content>
              <Title>{props.title}</Title>
              <Desc>{props.category}</Desc>
              <Price>
                <span>{props.price}</span>
                <Link to={`/details/${props.id}`}>
                  <Button
                    onClick={() => {
                      dispatch(viewDetail(props));
                    }}
                  >
                    View Detail
                  </Button>
                </Link>
                <Button
                  onClick={() => {
                    dispatch(addToCart(props));
                  }}
                >
                  Add to Cart
                </Button>
              </Price>
            </Content>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;

const Button = styled.button`
  margin-right: 10px;
  height: 40px;
  width: 100px;
  outline: none;
  border: 0;
  background-color: #397546;
  border-radius: 3px;
  color: white;

  :hover {
    cursor: pointer;
  }
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
`;
