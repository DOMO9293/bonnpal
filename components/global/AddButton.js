import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

const AddButton = () => {
  return (
    <StyledAddButton>
      <StyledIcon name="ios-add" size={45} />
    </StyledAddButton>
  );
};

export default AddButton;

const StyledAddButton = styled.View`
  width: 55px;
  height: 55px;
  border-radius: 30px;
  margin: 8px;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.mainColor};
`;

const StyledIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.whiteColor};
`;
