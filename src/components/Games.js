import React, { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";

// define component
const TopGames = (props) => {
  // declare variables and set initial state
  const [games, setGames] = useState({ isLoaded: false, results: [] });

  // declare url and headers for fetch request
  const url = props.url;
  const headers = {
    headers: new Headers({
      "Client-ID": process.env.REACT_APP_CLIENT_ID
    })
  };

  useEffect(() => {
    async function getGames() {
      const item = await fetchData(url, headers);
      // set new state with response json data
      setGames({
        isLoaded: true,
        results: item
      });

      console.log(item);
    }
    getGames();
  }, []);

  return (
    <div>
      <h2 className="ml-4 mb-5 text-white">{props.title}</h2>
      <ul className="flex justify-start flex-wrap list-reset text-white shadow-md">
        {games.results.map(game => (
          <li key={game.id} className="m-6 truncate">
            <div className="thumbnail mb-2">
              <img src={game.box_art_url.replace('{width}x{height}.jpg', '175x225.jpg')} alt={game.name}/>
            </div>
            <span className="game-name">{game.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopGames;
