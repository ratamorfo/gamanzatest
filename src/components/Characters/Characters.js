// Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import CharactersCard from "./CharactersCard";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [offset, setOffset] = useState(6);

  useEffect(() => {
    getCharactersList(offset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  const getCharactersList = async (offset) => {
    try {
      const data = await axios.get(
        `https://www.breakingbadapi.com/api/characters?limit=6&offset=${offset}`
      );
      const listData = await data.data;
      setCharacters([...characters, ...listData]);
      console.log(listData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadMoreItems = () => {
    const newOffset = offset + 6;
    setOffset(newOffset);
  };

  const toggleSortName = () => {
    const sorted = [...characters].sort((a, b) => a.name.localeCompare(b.name));
    setCharacters(sorted);
    console.log(characters);
  };

  const toggleSortBirthday = () => {
    const sorted = [...characters].sort((a, b) => {
      return new Date(b.birthday) - new Date(a.birthday);
    });
    setCharacters(sorted);
  };

  const toggleSortPortrayed = () => {
    const sorted = [...characters].sort((a, b) =>
      a.portrayed.localeCompare(b.portrayed)
    );
    setCharacters(sorted);
  };

  return (
    <div>
      {characters.length > 0 ? (
        <div className="characters">
          <div className="sort_section">
            <h3>Sort by</h3>
            <button onClick={toggleSortName}>Name</button>
            <button onClick={toggleSortBirthday}>Birthday</button>
            <button onClick={toggleSortPortrayed}>Portrayed</button>
          </div>
          <div className="list_characters">
            {characters.map((character, key) => {
              return <CharactersCard key={key} character={character} />;
            })}
          </div>
          <div className="load_more">
            <button onClick={() => handleLoadMoreItems()}>Load More</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Characters;
