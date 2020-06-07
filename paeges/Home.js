import React from "react";
import styled from "styled-components";
import Total from "../components/home/Total";
import Recipts from "../components/home/Recipts";
import Todo from "../components/home/Todo";
const Home = () => {
  return (
    <>
      <Total />

      <Recipts />
      <Todo />
    </>
  );
};

export default Home;
