import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

const BoonCon = ({ fin }) => {
  return (
    <Boon>
      <Avatar source={require("../../assets/prifil.png")} />
      <Name>Grocery</Name>
      <CreatedAt>2020-06-21</CreatedAt>
      {fin ? (
        <Check name="ios-checkmark-circle-outline" size={30} />
      ) : (
        <Text>80€</Text>
      )}
    </Boon>
  );
};

export default BoonCon;

const Boon = styled.View`
  width: 100%;
  justify-content: center;
  border-bottom-color: ${({ theme }) => theme.greyColor};
  border-radius: 30px;
  border-bottom-width: 0.2px;

  margin-bottom: 10px;
`;

const Name = styled.Text`
  margin-left: 68px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.blackColor};
`;
const CreatedAt = styled.Text`
  font-size: 12px;
  margin-left: 68px;
  margin-bottom: 10px;
  font-weight: 200;
  color: ${({ theme }) => theme.greyColor};
`;

const Text = styled.Text`
  font-size: 20px;
  position: absolute;
  top: 7px;
  left: 330px;
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
  left: 7px;
`;
const Check = styled(Ionicons)`
  color: ${({ theme }) => theme.mainColor};
  position: absolute;
  top: 5px;
  left: 340px;
`;
