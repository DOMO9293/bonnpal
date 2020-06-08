import React from "react";
import Header from "../components/bonnDetail/Header";
import BonnDetails from "../components/bonnDetail/BonnDetail";
import CheckButton from "../components/global/CheckButton";

const BonnDetail = () => {
  return (
    <>
      <Header payer />
      <BonnDetails payer />
    </>
  );
};

export default BonnDetail;
