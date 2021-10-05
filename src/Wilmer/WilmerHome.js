import React from "react";
import styled from "styled-components";
import { HeaderWil } from "./HeaderWil";
import { HomeWil } from "./HomeWil";
import { AboutWil } from "./AboutWil";
import { MenuWil } from "./MenuWil";
import { GalleryWil } from "./GalleryWil";

export const WilmerHome = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderWil />
        <HomeWil />
        <AboutWil />
        <MenuWil />
        <GalleryWil />
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
