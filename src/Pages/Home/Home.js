import React from "react";
import { useSelector, useStore } from "react-redux";
import { Navbar } from "../../Components";

const Home = () => {
  // const { user } = useSelector((state) => ({ ...state }));
  return (
    <div>
      <Navbar />
      home page
    </div>
  );
};

export default Home;
