import React from "react";
import styled from "styled-components";
import { HeaderComp } from "./HeaderComp";
import { Comp1 } from "./Comp1";
import { Comp2 } from "./Comp2";
import { Comp3 } from "./Comp3";

export const FoodScreen = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderComp />
        <Comp1 />
        <Comp2 />
        <Comp3 />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #fafafa;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
