import React from "react";
import styled from "styled-components";

const BonnEl = () => {
  return (
    <Bonn>
      <Avatar source={require("../../assets/prifil.png")} />
      <Name>Grocery</Name>
      <CreatedAt>2020-06-21</CreatedAt>
      <Text>80€</Text>
    </Bonn>
  );
};

export default BonnEl;

const Bonn = styled.View`
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
