
import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

const PreviewCollection = ({ title, items }) => (
  <div className="container">
    <h1>{title.toUpperCase()}</h1>
    <div>
      {
        items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))
      }
    </div>
  </div>
);

export default PreviewCollection;