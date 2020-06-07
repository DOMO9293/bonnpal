import React from "react";
import styled from "styled-components";

const TodoEl = () => {
  return (
    <TodoE>
      <Avatar source={require("../../assets/prifil.png")} />
      <Name>Asian Mart</Name>
      <CreatedAt>2020-06-21</CreatedAt>
    </TodoE>
  );
};

export default TodoEl;

const TodoE = styled.View`
  width: 100%;
  justify-content: center;
  margin-bottom: 10px;
`;

const Name = styled.Text`
  margin-left: 70px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.blackColor};
`;
const CreatedAt = styled.Text`
  font-size: 12px;
  margin-left: 71px;

  font-weight: 200;
  color: ${({ theme }) => theme.greyColor};
`;

const Text = styled.Text`
  font-size: 20px;
  position: absolute;
  top: 6px;
  left: 280px;
  font-weight: bold;
  color: ${({ theme }) => theme.blackColor};
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  margin-left: 5px;
  position: absolute;
  top: 5px;
  left: 10px;
`;
