import React from "react";
import Jumbotron from "../components/Jumbotron";
import CardInformation from "../components/CardInformation";
import CardProject from "../components/CardProject";

const Home = () => {
  return (
    <section>
      <Jumbotron />
      <CardInformation/>
      <CardProject/>
    </section>
  );
};

export default Home;
