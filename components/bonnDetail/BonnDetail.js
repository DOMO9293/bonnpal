import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import Total from "../home/Total";
import CheckButton from "../global/CheckButton";
const BonnDetails = ({ payer }) => {
  return (
    <Container>
      <Scroll payer={payer}>
        <TextContainer>
          <Text align={"left"}>kohlabi</Text>
          <Text align={"center"}>1stk.</Text>
          <Text align={"right"}>1.5€</Text>
        </TextContainer>
        <TextContainer>
          <Text align={"left"}>kohlabi</Text>
          <Text align={"center"}>1stk.</Text>
          <Text align={"right"}>1.5€</Text>
        </TextContainer>
        <TextContainer>
          <Text align={"left"}>kohlabi</Text>
          <Text align={"center"}>1stk.</Text>
          <Text align={"right"}>1.5€</Text>
        </TextContainer>
        <TextContainer>
          <Text align={"left"}>kohlabi</Text>
          <Text align={"center"}>1stk.</Text>
          <Text align={"right"}>1.5€</Text>
        </TextContainer>
        <TextContainer>
          <Text align={"left"}>kohlabi</Text>
          <Text align={"center"}>1stk.</Text>
          <Text align={"right"}>1.5€</Text>
        </TextContainer>
        <TextContainer>
          <Text align={"left"}>kohlabi</Text>
          <Text align={"center"}>1stk.</Text>
          <Text align={"right"}>1.5€</Text>
        </TextContainer>
        <TextContainer>
          <Text align={"left"}>kohlabi</Text>
          <Text align={"center"}>1stk.</Text>
          <Text align={"right"}>1.5€</Text>
        </TextContainer>
        <TextContainer>
          <Text align={"left"}>kohlabi</Text>
          <Text align={"center"}>1stk.</Text>
          <Text align={"right"}>1.5€</Text>
        </TextContainer>
        <TextContainer>
          <Text align={"left"}>kohlabi</Text>
          <Text align={"center"}>1stk.</Text>
          <Text align={"right"}>1.5€</Text>
        </TextContainer>
      </Scroll>
      <TotalText payer={payer}>total: 140Euro</TotalText>
      <CheckButton payer={payer} children={"check out!"} />
    </Container>
  );
};

export default BonnDetails;

const Container = styled.View`
  width: 375px;
  height:${({ payer }) => (payer ? 400 : 460)}px;
  background-color: white;
  border-radius:15px;
  margin: 18px;
  margin-top: 10px;
  margin-bottom: 5px;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2px};
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 1;
  padding-top:15px;
`;
const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;

  width: 33%;
  text-align: center;
  color: ${({ theme }) => theme.blackColor};
`;

const TextContainer = styled.View`
  margin: 4px;
  border-bottom-color: ${({ theme }) => theme.greyColor};
  border-bottom-width: 0.2px;
  border-radius: 30px;

  flex: 1;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const TotalText = styled.Text`
  color: ${({ theme }) => theme.blackColor};
  flex: 1;
  font-size: 25px;
  text-align: right;
  margin-right: 30px;
  font-weight: bold;
`;

const Scroll = styled(ScrollView)`
  flex: ${({ payer }) => (payer ? 7 : 4)};
  margin: 1px;
`;
