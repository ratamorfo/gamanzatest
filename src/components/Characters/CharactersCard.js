// Dependencies
import React, { Fragment } from "react";
import PropTypes from "prop-types";

// Components
import { Card, CardMedia, CardContent } from "@material-ui/core";

const CharactersCard = ({ character }) => {
  console.log("enter");
  return (
    <Fragment>
      <Card className="character">
        <CardMedia image={character.img} />
        <CardContent>
          <p className="character_name">
            <span className="subtitle">Name:</span>
            {character.name}
          </p>
          <p className="character_status">
            <span className="subtitle">Status:</span>
            {character.status}
          </p>
          <p className="character_portrayed">
            <span className="subtitle">Portrayed:</span>
            {character.portrayed}
          </p>
          <p className="character_birthday">
            <span className="subtitle">Birthday:</span>
            {character.Birthday}
          </p>
          <p className="character_occupation">Occupations:</p>
          <ul className="character_occupation_list">
            {character.occupation.map((occupation, key) => {
              return <li key={key}>{occupation}</li>;
            })}
          </ul>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default CharactersCard;

// Props
CharactersCard.propTypes = {
  character: PropTypes.object.isRequired,
};
