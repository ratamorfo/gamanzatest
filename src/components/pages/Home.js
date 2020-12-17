// Dependencies
import React, { Fragment } from "react";

// Components
import Characters from "../Characters/Characters";
import Deaths from "../Deaths/Deaths";

const Home = () => {
  return (
    <Fragment>
      <div className="Home">
        <h2>List of Characters and Deaths</h2>
        <Characters />
        <Deaths />
      </div>
    </Fragment>
  );
};

export default Home;
