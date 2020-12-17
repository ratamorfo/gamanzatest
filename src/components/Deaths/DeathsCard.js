// Dependencies
import React, { Fragment } from "react";
import PropTypes from "prop-types";

// Components
import { Card, CardMedia, CardContent } from "@material-ui/core";

const DeathsCards = ({ death }) => {
  console.log("enter");
  return (
    <Fragment>
      <Card className="death">
        <CardMedia image={death.img} />
        <CardContent>
          <p className="death_name">
            <span className="subtitle">Name: </span>
            {death.death}
          </p>
          <p className="death_cause">
            <span className="subtitle">Cause: </span>
            {death.cause}
          </p>
          <p className="death_responsible">
            <span className="subtitle">Responsible: </span>
            {death.resposible}
          </p>
          <p className="death_last_words">
            <span className="subtitle">Last Words: </span>
            {death.last_words}
          </p>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default DeathsCards;

// Props
DeathsCards.propTypes = {
  death: PropTypes.object.isRequired,
};
