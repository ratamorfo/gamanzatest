// Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import EpisodesCard from "./EpisodesCard";

const Episodes = () => {
  const [Episodes, setEpisodes] = useState([]);
  const [totalEpisodes, setTotalEpisodes] = useState(0);

  useEffect(() => {
    getEpisodesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getEpisodesList = async (offset) => {
    try {
      const EpisodesData = await axios.get(
        `https://www.breakingbadapi.com/api/Episodes`
      );
      let countData = await axios.get(
        `https://www.breakingbadapi.com/api/death-count`
      );
      let listData = await EpisodesData.data;
      listData = listData.slice(0, 5);
      console.log(countData);
      const countValue = countData.data[0].deathCount;
      setEpisodes(listData);
      setTotalEpisodes(countValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Episodes">
      <p>Total Episodes: {totalEpisodes}</p>
      <h3>Episodes</h3>
      <div className="list_Episodes">
        {Episodes.map((death, key) => {
          return <EpisodesCard key={key} death={death} />;
        })}
      </div>
    </div>
  );
};

export default Episodes;
