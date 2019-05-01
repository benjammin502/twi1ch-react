import React, { useState, useEffect } from "react";

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

  // fires and fetches after dom load (so we fetch data only once after original dom is loaded)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, headers);
      const data = await response.json();
      const item = data.data;
      // set new state with response json data
      setTopGames({
        isLoaded: true,
        results: item
      })
    }
    // call fetchData to retrieve api info
    fetchData();
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
