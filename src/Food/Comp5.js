import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Comp5 = () => {
  return (
    <Container>
      <Wrapper>Comp5 Screen</Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: yellow;
`;
const Wrapper = styled.div``;
