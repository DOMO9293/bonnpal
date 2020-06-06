import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import { ThemeProvider } from "styled-components/native";
import styles from "./styles";
import Button from "./components/global/buttons";
import Titlebar from "./components/global/Titlebar";

const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.whiteColor};
`;
const MainText = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: palevioletred;
`;

export default function App() {
  return (
    <ThemeProvider theme={styles}>
      <Container>
        <Titlebar />
        <MainText>Hello world</MainText>
        <Button textColor="blackColor" backgroundColor="mainColor">
          DANBI
        </Button>
      </Container>
    </ThemeProvider>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}); */
