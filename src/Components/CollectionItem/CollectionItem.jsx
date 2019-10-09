
import React from 'react';

const CollectionItem = ({id, name, price, imageUrl}) => (
  <div>
    <div className='image'
      style={{backgroundImage: `url(${imageUrl})`}}
    >
      <div>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  </div>
);

export default CollectionItem;