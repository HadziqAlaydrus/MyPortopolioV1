import React from "react";
import Jumbotron from "../components/Jumbotron";
import CardInformation from "../components/CardInformation";
import CardProject from "../components/CardProject";
import CardExperience from "../components/CardExperience";

const Home = () => {
  return (
    <section>
      <Jumbotron />
      <CardExperience />
      <CardInformation />
      <CardProject />
    </section>
  );
};

export default Home;
