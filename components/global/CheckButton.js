import React from "react";
import styled from "styled-components";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

const CheckButton = ({ children, payer }) => {
  return (
    <Button payer={payer}>
      <Text>{children}</Text>
    </Button>
  );
};

export default CheckButton;

const Button = styled.View`
  display: ${({ payer }) => (payer ? "flex" : "none")};
  margin: 30px;
  flex: 1;
  width: 200px;
  height: 10%;
  border-radius: 30px;
  text-align: center;
  justify-content: center;
  align-self: center;
  background-color: ${({ theme }) => theme.mainColor};
`;

const Text = styled.Text`
  text-align: center;

  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.whiteColor};
`;
