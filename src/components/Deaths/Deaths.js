// Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import DeathsCard from "./DeathsCard";

const Deaths = () => {
  const [deaths, setDeaths] = useState([]);
  const [totalDeaths, setTotalDeaths] = useState(0);

  useEffect(() => {
    getDeathsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDeathsList = async () => {
    try {
      const deathsData = await axios.get(
        `https://www.breakingbadapi.com/api/deaths`
      );
      let countData = await axios.get(
        `https://www.breakingbadapi.com/api/death-count`
      );
      let listData = await deathsData.data;
      listData = listData.slice(0, 5);
      console.log(countData);
      const countValue = countData.data[0].deathCount;
      setDeaths(listData);
      setTotalDeaths(countValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {deaths.length > 0 ? (
        <div className="deaths">
          <h3>Deaths</h3>
          <p>Total Deaths: {totalDeaths}</p>
          <div className="list_deaths">
            {deaths.map((death, key) => {
              return <DeathsCard key={key} death={death} />;
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Deaths;
