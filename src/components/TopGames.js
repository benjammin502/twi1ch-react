import React, { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";

// define component
const TopGames = () => {
  // declare variables and set initial state
  const [games, setTopGames] = useState({ isLoaded: false, results: [] });

  // declare url and headers for fetch request
  const url = "https://api.twitch.tv/helix/games/top";
  const headers = {
    headers: new Headers({
      "Client-ID": process.env.REACT_APP_CLIENT_ID
    })
  };

  useEffect(() => {
    async function getTopGames() {
      const item = await fetchData(url, headers);
      // set new state with response json data
      setTopGames({
        isLoaded: true,
        results: item
      });
    }
    getTopGames();
  }, []);

  return (
    <div>
      <ul>
        {games.results.map(game => (
          <li key={game.id}>{game.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopGames;
