import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import TodoEl from "./TodoEl";
import { Ionicons } from "@expo/vector-icons";

const Todo = () => {
  return (
    <Container>
      <Title>Shopping List</Title>
      <TodoEl />
      <TodoEl />

      <ViewMore>View more...</ViewMore>
    </Container>
  );
};

export default Todo;

const Container = styled.View`
  background-color: white;
  height: 190px;
  width: 350px;
  border-radius: 15px;
  margin: 30px;
  margin-top: 20px;
  margin-bottom: 5px;
  text-align: center;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 1;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.blackColor};
  font-size: 22px;
  font-weight: bold;
  margin: 5px;
  margin-left: 20px;
  margin-bottom: 7px;
`;

const ViewMore = styled.Text`
  color: ${({ theme }) => theme.greyColor};
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 10px;
  text-align: center;
`;
