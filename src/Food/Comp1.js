import React from "react";
import styled from "styled-components";
import img from "../assets/pizza.png";

export const Comp1 = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Healthy & Fresh Food For You</Title>
          <Desc>
            Created for lovers of healthy delicious and non-obvious food.
          </Desc>
          <Button>Check Menu</Button>
        </Content>
        <ImageHolder>
          <ImageViewer>
            <Image src={img} />
          </ImageViewer>
        </ImageHolder>
      </Wrapper>
    </Container>
  );
};

const Content = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;
const Title = styled.div`
  font-size: 60px;
  font-weight: bolder;
  line-height: 1.3;
`;
const Desc = styled.div`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  width: 400px;
`;
const ImageHolder = styled.div`
  width: 900px;
  height: 900px;
  position: relative;
  overflow: hidden;
`;

const ImageViewer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #397546;
  position: absolute;
  right: -70px;
  top: -100px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Button = styled.div`
  width: 200px;
  height: 60px;
  border-radius: 5px;
  outline: none;
  border: 0;
  background-color: #f19a33;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  letter-spacing: 1.5px;
  font-size: 20px;
  box-shadow: rgb(0 0 0 / 39%) 0px 16px 10px -10px;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    box-shadow: rgb(0 0 0 / 19%) 0px 26px 30px -10px,
      rgb(0 0 0 / 43%) 0px 16px 10px -10px;
    transform: scale(0.97);
    cursor: pointer;
  }
`;
const Image = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  position: absolute;
  top: 250px;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    transform: scale(0.93);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: linear-gradient(#b6cba7, #fafafa);
  padding-top: 150px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
