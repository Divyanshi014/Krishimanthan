import React, { Fragment } from "react";

import Header from "../Components/Header/Header";
import Popular from '../Components/PopularCard/Popular'
import Lifestyle from '../Components/LifestyleCard/Lifestyle'

const Home = () => {
  return (
    <Fragment>
      <Header/>
      <Popular/>
      <Lifestyle/>
    </Fragment>
  );
};

export default Home;
