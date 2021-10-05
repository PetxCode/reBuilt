import React from "react";
import styled from "styled-components";
import vege from "../assets/vege.png";

export const AboutWil = () => {
  return (
    <Container>
      <Wrapper>
        <Main>
          <Box>
            <Image src={vege} />
          </Box>
        </Main>
        <Content>
          <Name>About us</Name>
          <Title>Few words about us</Title>
          <Desc>
            We are not ordinary food truck. We create a place overflowing with
            positive energy that it expresses important to us values. Get to
            know them specifically.
          </Desc>
          <Button>Learn More</Button>
        </Content>
      </Wrapper>
    </Container>
  );
};

const Image = styled.img`
  width: 600px;
  height: 550px;
  object-fit: cover;
  position: absolute;
  right: -250px;
  margin-right: 30px;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    transform: scale(0.93);
  }
`;
const Main = styled.div`
  width: 800px;
  height: 800px;
  position: relative;
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #397546;
  position: absolute;
  left: -250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 550px;
  margin-right: 90px;
  padding-right: 80px;
`;
const Name = styled.div`
  font-size: 30px;
  font-weight: normal;
  color: #f19a33;
  margin-bottom: 20px;
`;
const Title = styled.div`
  font-size: 48px;
`;
const Desc = styled.div`
  font-size: 25px;
  margin: 30px 0;
`;
const Button = styled.button`
  background-color: #397546;
  width: 180px;
  border-radius: 5px;
  border: 0;
  outline: none;
  height: 60px;
  color: white;
  font-size: 25px;
  letter-spacing: 1.5px;
  transition: all 350ms;
  transform: scale(1);
  box-shadow: rgb(0 0 0 / 49%) 0px 16px 10px -10px;

  :hover {
    transform: scale(0.93);
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 49%) 0px 26px 30px -10px,
      rgb(0 0 0 / 43%) 0px 16px 10px -10px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #fafafa;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
