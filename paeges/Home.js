import React from "react";
import Total from "../components/home/Total";
import Recipts from "../components/home/Recipts";
import Todo from "../components/home/Todo";
import AddButton from "../components/global/AddButton";

const Home = () => {
  return (
    <>
      <Total />
      <Recipts />
      <Todo />
      <AddButton />
    </>
  );
};

export default Home;
