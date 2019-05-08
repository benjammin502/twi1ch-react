import React from 'react'

const ContentList = ({title, type, fetchObj}) => {
  const itemType = type;

  console.log(fetchObj);

  return (
    <div>
      <h2 className="ml-4 mb-5 text-white">{title}</h2>
      <ul className="flex justify-start flex-wrap list-reset text-white shadow-md">
        {fetchObj.streams.results.map(item => (
          <li key={item.id} className="m-6 truncate">
            <div className="thumbnail mb-2">
              {itemType === 'streams' && <img src={item.thumbnail_url.replace('{width}x{height}.jpg', '400x225.jpg')} alt={item.user_name} onClick />}
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
