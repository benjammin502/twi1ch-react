import React from "react";
import "./index.css";
// import "./app.css";
import Games from "./components/Games";
import Streams from "./components/Streams";

function App(props) {
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

      <section id="videosList" className="bg-black overflow-y-auto pt-10">
        {/* <Games title="Top Games" url="https://api.twitch.tv/helix/games/top?first=20" /> */}
        <Streams title="Streams" url="https://api.twitch.tv/helix/streams" />
      </section>

      <footer className="h-16 bg-twitch-purple text-white flex justify-around items-center">
        <span>&copy; {new Date().getFullYear()} - Benjamin Myers - Made with ☕️ React, & Tailwind</span>
      </footer>
    </div>
  );
}

export default App;
