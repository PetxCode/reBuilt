import React from "react";
import styled from "styled-components";
import img from "../assets/buy.png";
import img1 from "../assets/buy1.png";
import img2 from "../assets/buy2.png";

export const MenuWil = () => {
  const data = [
    {
      id: 1,
      image: img,
      name: "Chickpae's salad",
      price: 7,
      desc: "Served with fires and drinks",
    },
    {
      id: 2,
      image: img1,
      name: "Mighty Burger",
      price: 8,
      desc: "Served with fires and drinks",
    },
    {
      id: 3,
      image: img2,
      name: "Chickpae's wrap",
      price: 3,
      desc: "Served with fires and drinks",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Menu>Menu</Menu>
        <Title>Explore Our Best Food</Title>
        <Desc>Below you can see our best selling meals!</Desc>
        <CardCard>
          {data.map((props) => (
            <Card>
              <Image src={props.image} />
              <View>
                <Name>{props.name}</Name>
                <Price>{props.price}$</Price>
              </View>
              <Sub>{props.desc}</Sub>
            </Card>
          ))}
        </CardCard>
      </Wrapper>
    </Container>
  );
};

const CardCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 400px;
  height: 450px;
  background-color: white;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  background-color: red;
  margin-bottom: 10px;
`;
const View = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  font-size: 25px;
`;
const Name = styled.div`
  margin-left: 10px;
`;
const Price = styled.div`
  margin-right: 10px;
`;
const Sub = styled.div`
  margin: 10px;
`;

const Menu = styled.div`
  color: #ef9e45;
  font-size: 40px;
  margin-bottom: 10px;
`;

const Desc = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
`;
const Title = styled.div`
  font-size: 60px;
  margin-bottom: 10px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #fafafa;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
