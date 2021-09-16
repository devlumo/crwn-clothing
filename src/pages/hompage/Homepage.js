import React from "react";
import "./Homepage.styles.scss";
import { HomePageContainer } from "./home-page.styles";

import Directory from "../../components/directory/Directory";

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
