import React from "react";
import styled from "styled-components";

function Titlebar() {
  return (
    <StyledTitlebar>
      <Text>Grocery</Text>
      <Name>DANBI</Name>
      <Avatar source={require("../../assets/prifil.png")} />
    </StyledTitlebar>
  );
}

export default Titlebar;
const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.whiteColor};
`;
const StyledTitlebar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 0px;
`;

const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.blackColor};
  background-color: pink;
`;

const Name = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.boldColor};
  font-weight: 200;
  background-color: blue;
`;
const Avatar = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 22px;
  margin-left: 00px;

  position: absolute;
  top: 0;
  left: 320;
`;
