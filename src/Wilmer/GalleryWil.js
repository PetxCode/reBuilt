import React from "react";
import styled from "styled-components";

import img from "../assets/serve.png";
import img1 from "../assets/serve1.png";
import img2 from "../assets/serve2.png";
import img3 from "../assets/serve3.png";
import img4 from "../assets/serve4.png";
import img5 from "../assets/serve5.png";

export const GalleryWil = () => {
  const data = [
    {
      id: 1,
      image: img,
    },
    {
      id: 2,
      image: img1,
    },
    {
      id: 3,
      image: img2,
    },
    {
      id: 4,
      image: img3,
    },
    {
      id: 5,
      image: img4,
    },
    {
      id: 6,
      image: img5,
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Title>Good food = happy clients</Title>
        <Card>
          {data.map((props) => (
            <MyCard>
              <Image src={props.image} />
            </MyCard>
          ))}
        </Card>
      </Wrapper>
    </Container>
  );
};

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MyCard = styled.div`
  width: 400px;
  height: 400px;
  margin: 10px;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  transform: scale(1);
  transition: all 350ms;
  :hover {
    transform: scale(1.02);
  }
`;

const Title = styled.div`
  font-size: 50px;
  margin-bottom: 20px;
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
  justify-content: center;
`;
