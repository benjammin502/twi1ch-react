import React, { useState } from "react";
import "./index.css";
// import "./app.css";
import Streams from "./components/Streams";
import Footer from "./components/Footer";
import Header from "./components/Header";

import WithApp from "./hoc/WithApp";
import WithContainer from "./hoc/WithContainer";
import WithSectionClasses from "./hoc/WithSectionClasses";

function App() {
  const [channel, setChannel] = useState("shroud");

  const handleStreamChange = e => {
    console.log(e.currentTarget.dataset.channel);
    setChannel(e.currentTarget.dataset.channel);
  };

  return (
    <WithApp>
      {/* Header */}
      <Header />

      <WithContainer id="heroSection" container="false">
        <WithContainer container="true">
          {/* video section/hero */}
          <WithSectionClasses id="hero" className="bg-black">
            <div id="videoWrapper">
              <iframe
                src={`https://player.twitch.tv/?channel=${channel}`}
                frameBorder="0"
                scrolling="no"
                allowfullscreen="true"
                title="Twitch Stream"
              />
            </div>
          </WithSectionClasses>
        </WithContainer>
      </WithContainer>

      {/* Section to display either Streams component or Videos component */}
      <WithContainer>
        <WithSectionClasses
          id="videosList"
          className="bg-black overflow-y-auto pt-10 w-5/6 mx-auto"
        >
          {/* <Games title="Top Games" url="https://api.twitch.tv/helix/games/top?first=20" /> */}
          <Streams
            title="Streams"
            url="https://api.twitch.tv/helix/streams"
            parentStreamHandler={handleStreamChange}
          />
        </WithSectionClasses>
      </WithContainer>

      {/* footer component */}
      <Footer />
    </WithApp>
  );
}

export default App;
