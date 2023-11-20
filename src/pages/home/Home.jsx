import React from "react";
import "./home.css";
import { Bids, Header } from "../../components";

const Home = () => {

  return (
    <div>
      <Header />
      <Bids title="Hot Bids" />
    </div>
  );
};

export default Home;
