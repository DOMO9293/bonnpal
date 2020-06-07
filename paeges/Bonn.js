import React from "react";
import { View, Text } from "react-native";
import BonnList from "../components/bonn/BonnList";
import AddButton from "../components/global/AddButton";
const Bonn = () => {
  return (
    <>
      <BonnList />
      <AddButton />
    </>
  );
};

export default Bonn;
