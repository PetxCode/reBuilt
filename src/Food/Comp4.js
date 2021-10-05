import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Comp4 = () => {
  return (
    <Container>
      <Wrapper>Comp4 Screen</Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: green;
`;
const Wrapper = styled.div``;
