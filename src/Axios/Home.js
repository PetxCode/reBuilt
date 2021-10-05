import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Home = () => {
  const [myData, setMyData] = useState();

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://sephora.p.rapidapi.com/products/list",
      params: { categoryId: "cat150006", pageSize: "60", currentPage: "1" },
      headers: {
        "x-rapidapi-host": "sephora.p.rapidapi.com",
        "x-rapidapi-key": "02dc23aea7msh5cc3022c747fdd7p160805jsn1378c2b79155",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setMyData(response.data.products);
        // console.log("get Data: ", myData);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception",
      headers: {
        "x-rapidapi-host":
          "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        "x-rapidapi-key": "02dc23aea7msh5cc3022c747fdd7p160805jsn1378c2b79155",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        console.log("get Data: ", response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <Wrapper>
        {myData?.map((props) => (
          <Card>
            <Image src={props.currentSku.skuImages.image42} />
            <Content>
              <Title>{props.brandName}</Title>
              <Title1>{props.displayName}</Title1>
              <Title1>{props.currentSku.valuePrice}</Title1>
            </Content>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding-top: 120px;
  background-color: lightgray;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Card = styled.div`
  margin: 10px;
  width: 300px;
  height: 350px;
  background-color: lightblue;
  border-radius: 0 0 5px 5px;
  transition: all 350ms;

  :hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
`;
const Content = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`;
const Title = styled.div``;
const Title1 = styled.div`
  font-size: 12px;
  margin: 10px 0;
`;
