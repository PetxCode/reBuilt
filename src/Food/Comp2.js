import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import image from "../assets/vege.png";

export const Comp2 = () => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <ImageHolder>
            <Image src={image} />
          </ImageHolder>
        </ImageContainer>
        <Content>
          <Title>About Us</Title>
          <Desc>Few words about us</Desc>
          <Sub>
            We are not ordinary food truck. We create a place overflowing with
            positive energy that it expresses important to us values. Get to
            know them specifically.
          </Sub>
          <Button>Learn More</Button>
        </Content>
      </Wrapper>
    </Container>
  );
};

const ImageContainer = styled.div`
  width: 900px;
  height: 900px;
  position: relative;
  overflow: hidden;
  /* background-color: powderblue; */
`;
const ImageHolder = styled.div`
  width: 100%;
  height: 100%;
  background: #397546;
  border-radius: 50%;
  position: absolute;
  left: -410px;
`;
const Image = styled.img`
  width: 800px;
  height: 800px;
  object-fit: contain;
  position: absolute;
  top: 200px;
  right: -380px;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(0.95);
    cursor: pointer;
  }
`;
const Content = styled.div`
  width: 600px;
`;
const Title = styled.div`
  font-size: 30px;
  margin-bottom: 25px;
  color: #f19a33;
`;
const Button = styled.div`
  width: 200px;
  height: 60px;
  background-color: #397546;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 15px;
  font-size: 18px;
  letter-spacing: 1px;
  transition: all 400ms;
  transform: scale(1);
  /* box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.6); */

  :hover {
    transform: scale(0.92);
    cursor: pointer;
  }
`;
const Desc = styled.div`
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 10px;
`;
const Sub = styled.div`
  font-size: 20px;
  font-weight: light;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  /* background-color: red; */
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
