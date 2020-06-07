import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const Total = () => {
  return (
    <Container>
      <Title>Total</Title>
      <Content>70 € / 70 €</Content>
    </Container>
  );
};

export default Total;

const Container = styled.View`
  background-color: ${({ theme }) => theme.mainColor};
  height: 170px;
  width: 350px;
  border-radius: 15px;
  margin: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  align-items: center;
  text-align: center;
  shadow-color: #000;
  shadow-offset: {width: 0px, height: 2px};
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 1;
`;

const Title = styled.Text`
  color: whitesmoke;
  font-size: 18px;
  font-weight: bold;
  margin-top: 28px;
`;
const Content = styled.Text`
  color: whitesmoke;
  font-size: 45px;
  margin-top: 16px;
`;
