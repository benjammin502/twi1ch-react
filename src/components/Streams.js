import React, { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import ContentList from "./ContentList";

// define component
const Streams = (props) => {
  // declare variables and set initial state
  const [streams, setStreams] = useState({ isLoaded: false, results: [] });

  // declare url and headers for fetch request
  const url = props.url;
  const headers = {
    headers: new Headers({
      "Client-ID": process.env.REACT_APP_CLIENT_ID
    })
  };

  useEffect(() => {
    async function getStreams() {
      const item = await fetchData(url, headers);
      // set new state with response json data
      setStreams({
        isLoaded: true,
        results: item
      });

      console.log(item);
    }
    getStreams();
  }, []);

  

  return (
    <ContentList title="Streams" url="https://api.twitch.tv/helix/streams" type="streams" fetchObj={{streams}} fromParent={props.parentStreamHandler} />
  );
};

export default Streams;
