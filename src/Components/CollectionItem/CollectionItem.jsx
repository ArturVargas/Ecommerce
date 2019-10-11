
import React from 'react';

const CollectionItem = ({id, name, price, imageUrl}) => (
  <div className="col-6">
    <div className="card text-white my-4">
      <img src={imageUrl} alt="items"/>
      <div className="card-img-overlay">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
      </div>
    </div>
    {/* <div className='image'
      style={{backgroundImage: `url(${imageUrl})`}}
    >
      <div>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div> */}
  </div>
);

export default CollectionItem;