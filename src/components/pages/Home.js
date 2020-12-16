// Dependencies
import React, { Fragment } from "react";

// Components
import Characters from "../Characters/Characters";

const Home = () => {
  return (
    <Fragment>
      <div className="Home">
        <h2>List of Characters and Deaths</h2>
        <Characters />
      </div>
    </Fragment>
  );
};

export default Home;
