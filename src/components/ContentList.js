import React, { useState } from "react";

const ContentList = ({ title, type, fetchObj, fromParent }) => {
  let [channel, setChannel] = useState("shroud");
  const itemType = type;

  const handleClick = e => {
    channel = e.target.value;
    setChannel(channel);
  };

  return (
    <div>
      <h2 className="ml-4 mb-5 text-white">{title}</h2>
      <ul
        id="streamsUl"
        className="flex justify-around flex-wrap list-reset text-white"
      >
        {fetchObj.streams.results.map(item => (
          <li
            key={item.id}
            className="m-6 shadow-md bg-white cursor-pointer rounded text-black"
            onClick={fromParent}
            data-channel={item.user_name}
          >
            <div className="thumbnail mb-2">
              {itemType === "streams" && (
                <img
                  src={item.thumbnail_url.replace(
                    "{width}x{height}.jpg",
                    "400x225.jpg"
                  )}
                  alt={item.user_name}
                  data-channel={item.user_name}
                />
              )}
            </div>
            <div className="truncate p-4">
              <span className="game-name">{item.user_name}</span>
              <br />
              <span className="game-name">{item.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
