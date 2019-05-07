import React from "react";
import "./index.css";
// import "./app.css";
import TopGames from "./components/TopGames";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="h-16 bg-twitch-purple text-white shadow-lg">
        <nav id="nav-menu">
          <ul className="list-reset flex flex-row justify-left items-center h-16 ml-8">
            <li>Twi1ch</li>
            <li>Top Games</li>
            <li>Streams</li>
            <li>Games</li>
          </ul>
        </nav>
      </header>

      {/* video section/hero */}
      <section id="hero" className="bg-black">
        <div id="videoWrapper">
          <iframe
            src="https://player.twitch.tv/?channel=shroud"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"
          />
        </div>
      </section>

      <section id="videosList">videos go here</section>
    </div>
  );
}

export default App;
