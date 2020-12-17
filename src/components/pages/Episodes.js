// Dependencies
import React, { Fragment } from "react";

// Components
import Episodes from "../Episodes/Episodes";

const EpisodesPage = () => {
  return (
    <Fragment>
      <div className="Episodes">
        <h2>List of Characters and Deaths</h2>
        <Episodes />
      </div>
    </Fragment>
  );
};

export default EpisodesPage;
