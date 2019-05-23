import React, { useState, useEffect } from "react";

const ContentList = ({ title, type, fetchObj, fromParent }) => {
  const [isHover, setIsHover] = useState([]);
  const itemType = type;

  const handleOnMouseEnter = (e) => {
    
  };

  const handleOnMouseLeave = i => {
  };

  return (
    <div>
      <h2 className="ml-4 mb-5 text-white">{title}</h2>
      <ul
        id="streamsUl"
        className="flex justify-around flex-wrap list-reset text-white"
      >
        {fetchObj.streams.results.map((item, index) => (
          <li
            key={item.id}
            id={item.id}
            className="m-6 shadow-lg bg-white cursor-pointer text-black rounded"
            onClick={fromParent}
            data-channel={item.user_name}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
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
                  className="rounded-t"
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
