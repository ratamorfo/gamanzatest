// Dependencies
import React, { Fragment } from "react";
import PropTypes from "prop-types";

// Components
import { Card, CardMedia, CardContent } from "@material-ui/core";

const EpisodesCards = ({ episode }) => {
  console.log("enter");
  return (
    <Fragment>
      <Card className="episode">
        <CardMedia image={episode.img} />
        <CardContent>
          <p className="episode_title">
            <span className="subtitle">Tile: </span>
            {episode.title}
          </p>
          <p className="episode_season">
            <span className="subtitle">Season: </span>
            {episode.season}
          </p>
          <p className="episode_episode">
            <span className="subtitle">Episode: </span>
            {episode.episode}
          </p>
          <p className="episode_air_date">
            <span className="subtitle">Air Date: </span>
            {episode.air_date}
          </p>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default EpisodesCards;

// Props
EpisodesCards.propTypes = {
  episode: PropTypes.object.isRequired,
};
