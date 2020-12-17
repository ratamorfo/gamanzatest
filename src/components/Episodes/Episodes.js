// Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import EpisodesCard from "./EpisodesCard";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [filterEpisodes, setFilterEpisodes] = useState([]);
  const [season, setSeason] = useState(0);

  useEffect(() => {
    getEpisodesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getEpisodesList = async () => {
    try {
      const episodesData = await axios.get(
        `https://www.breakingbadapi.com/api/Episodes`
      );
      const listData = await episodesData.data;
      setEpisodes(listData);
      console.log(listData);
      setFilterEpisodes(listData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = async (event) => {
    setSeason(event.target.value);
    const filtered = await [...episodes].filter((episode) => {
      return episode.season === season;
    });
    setFilterEpisodes(filtered);
  };

  return (
    <div>
      {episodes.length > 0 ? (
        <div className="episodes">
          <FormControl variant="outlined" className="form-filter">
            <InputLabel id="demo-simple-select-outlined-label">
              Filter
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={season}
              onChange={handleChange}
              label="Season">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="1">Season 1</MenuItem>
              <MenuItem value="2">Season 2</MenuItem>
              <MenuItem value="3">Season 3</MenuItem>
              <MenuItem value="4">Season 4</MenuItem>
            </Select>
          </FormControl>
          <div className="list_episodes">
            {filterEpisodes.map((episode, key) => {
              return <EpisodesCard key={key} episode={episode} />;
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Episodes;
