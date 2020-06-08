import React from "react";

import styled from "styled-components";
import { ScrollView } from "react-native";

const Header = ({ payer }) => {
  return (
    <Container>
      <Text>
        <Title>Danbi</Title>
        {"  "}payed 20.06.06
      </Text>

      {payer ? (
        <Text align={"right"}>
          payed back :<Title> 100€</Title>
        </Text>
      ) : (
        <Text align={"right"}>
          should pay : <Title> 100€</Title>
        </Text>
      )}
      <ProfilContainer horizontal={true} showsHorizontalScrollIndicator={false}>
        <Avatar source={require("../../assets/prifil.png")} />
        <Avatar source={require("../../assets/prifil.png")} />
        <Avatar source={require("../../assets/prifil.png")} />
        <Avatar source={require("../../assets/prifil.png")} />
        <Avatar source={require("../../assets/prifil.png")} />
        <Avatar source={require("../../assets/prifil.png")} />
        <Avatar source={require("../../assets/prifil.png")} />
        <Avatar source={require("../../assets/prifil.png")} />
        <Avatar source={require("../../assets/prifil.png")} />
      </ProfilContainer>
    </Container>
  );
};

export default Header;

const Container = styled.View`
  width: 375px;
  height:190px;
  background-color: white;
  border-radius:15px;
  margin: 18px;
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: center;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2px};
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 1;
`;
const Text = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.greyColor};
  margin-top: 7px;
  margin-left: 20px;
  margin-right: 8px;
  text-align: ${({ align }) => (align ? align : "left")};
`;
const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.blackColor};
  margin-top: 5px;
  margin-left: 18px;
`;
const ProfilContainer = styled(ScrollView)`
  width: 95%;
  flex-direction: row;
  margin: 10px;
  padding: 3px;
`;
const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  margin: 3px;
  border-radius: 15px;
`;
