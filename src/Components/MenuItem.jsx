
import React from 'react';

const MenuItem = (props) => (
  <div>
    <div className="row my-4">
      <div className="col-8 justify-content-center">
        <div className="card bg-dark">
          <img src={props.img} alt="photo-menu" />
          <div className="card-img-overlay">
            <h5 className="card-title">{props.title}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MenuItem;