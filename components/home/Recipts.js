import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import BonnEl from "../home/BonnEl";

const Recipts = () => {
  return (
    <Container>
      <Title>Bonn</Title>
      <BonnEl />
      <BonnEl />
      <ViewMore>View more...</ViewMore>
    </Container>
  );
};

export default Recipts;

const Container = styled.View`
  background-color: white;
  height: 190px;
  width: 350px;
  border-radius: 15px;
  margin: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 1;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.blackColor};
  font-size: 23px;
  font-weight: bold;
  margin: 5px;
  margin-left: 20px;
`;

const ViewMore = styled.Text`
  color: ${({ theme }) => theme.greyColor};
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 10px;
  text-align: center;
`;
