import React from "react";
import BoonCon from "./BoonCon";
import { ScrollView } from "react-native";
import styled from "styled-components";

const BonnList = () => {
  return (
    <Container>
      <BoonCon />
      <BoonCon />
      <BoonCon />
      <BoonCon />
      <BoonCon />
      <BoonCon />
      <BoonCon fin />
      <BoonCon fin />
      <BoonCon fin />
      <BoonCon fin />
      <BoonCon fin />
      <BoonCon fin />
      <BoonCon fin />
      <BoonCon fin />
    </Container>
  );
};

export default BonnList;

const Container = styled(ScrollView)`
  align-self: center;
  height: 77%;
  width: 390px;
  margin-top: 5px;
  overflow: scroll;
`;
