import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import { ThemeProvider } from "styled-components/native";
import styles from "./styles";
import Button from "./components/global/buttons";
import Titlebar from "./components/global/Titlebar";
import Home from "./paeges/Home";

const Container = styled.View`
  height: 100%;
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
        <Home />
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
