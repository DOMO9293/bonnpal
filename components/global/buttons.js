import { View } from "react-native";
import { width, height } from "../../state";
import styled from "styled-components";

import React from "react";

function Button({ backgroundColor, textColor, children }) {
  return (
    <ButtonContainer backgroundColor={backgroundColor}>
      <ButtonText textColor={textColor}>{children}</ButtonText>
    </ButtonContainer>
  );
}

export default Button;

const ButtonContainer = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  padding: 8px;
  border-radius: 15px;
  background-color: ${({ theme, backgroundColor }) => theme[backgroundColor]};
`;

const ButtonText = styled.Text`
  font-size: 15px;
  color: ${({ theme, textColor }) => theme[textColor]};
  text-align: center;
`;
