import React from 'react';

import './artwork.css';

const Artwork = () => {

  const tmp = {title:'Work', tags:['1','2'], 
  // image: 'https://images.squarespace-cdn.com/content/v1/57f0b8c859cc68fe6a908fb7/1562232357650-4K0I89UWU3SYRTKEYSD1/cypresses-by-vincent-van-gogh-famous-art-handmade-oil-painting-on-canvas.jpg?format=2500w'
  image: 'https://wallpaperaccess.com/full/2656.jpg'
};

  return (
    <div className="blog__artwork">
      <div className="blog__artwork-img">
        <img src={tmp.image} alt="artwork" />
      </div>
      <div className="blog__artwork-description">
        <h1 className="blog__artwork-title">{tmp.title}</h1>
        <p className="blog__artwork-tags">{tmp.tags.map(tag => '#'+tag+' ')}</p>
      </div>
    </div>
  )
}

export default Artwork;