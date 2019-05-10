import React, { useState } from 'react'

const ContentList = ({title, type, fetchObj, fromParent}) => {
  let [channel, setChannel] = useState('shroud');
  const itemType = type;

  const handleClick = (e) => {
    channel = e.target.value;
    setChannel(channel);
  }

  return (
    <div>
      <h2 className="ml-4 mb-5 text-white">{title}</h2>
      <ul className="flex justify-start flex-wrap list-reset text-white">
        {fetchObj.streams.results.map(item => (
          <li key={item.id} className="m-6 truncate shadow-md bg-grey-darkest cursor-pointer" onClick={fromParent} data-channel={item.user_name}>
            <div className="thumbnail mb-2">
              {itemType === 'streams' && <img src={item.thumbnail_url.replace('{width}x{height}.jpg', '400x225.jpg')} alt={item.user_name} data-channel={item.user_name} />}
              {itemType === 'games' && <img src={item.thumbnail_url.replace('{width}x{height}.jpg', '400x225.jpg')} alt={item.user_name}/>}
            </div>
            <span className="game-name">{item.user_name}</span><br />
            <span className="game-name">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContentList;
