import React from "react";
import styled from "styled-components";
import pepper from "../assets/pepper.png";
import pizza from "../assets/pizza.png";

export const HomeWil = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Healthy & Fresh Food For You</Title>
          <Desc>
            Created for lovers of healthy delicious and non-obvious food.
          </Desc>
          <Button>Check Menu</Button>
          <Picture src={pepper} />
        </Content>
        <MainBox>
          <Box>
            <Image src={pizza} />
          </Box>
        </MainBox>
      </Wrapper>
    </Container>
  );
};

const Picture = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  position: absolute;
  left: -120px;
  bottom: -330px;
`;

const MainBox = styled.div`
  width: 900px;
  height: 900px;
  position: relative;
  overflow: hidden;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: #397546;
  border-radius: 50%;
  position: absolute;
  top: -120px;
  right: -150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 600px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  bottom: 90px;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    transform: scale(0.95);
  }
`;

const Content = styled.div`
  flex-direction: column;
  display: flex;
  width: 500px;
  margin-left: 50px;
  position: relative;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 900;
`;
const Desc = styled.div`
  margin: 20px 0;
  font-size: 20px;
  font-weight: bold;
`;
const Button = styled.button`
  background-color: #f19a33;
  width: 200px;
  height: 60px;
  border: 0;
  outline: none;
  border-radius: 3px;
  color: white;
  font-size: 20px;
  letter-spacing: 1.5px;
  transition: all 350ms;
  transform: scale(1);
  margin: 30px 0;
  box-shadow: rgb(0 0 0 / 49%) 0px 16px 30px -10px;

  :hover {
    transform: scale(0.9);
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  /* background-color: #fafafa; */
  background-image: linear-gradient(#b8cdab, #fafafa);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
