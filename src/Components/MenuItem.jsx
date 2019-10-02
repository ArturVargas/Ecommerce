
import React from 'react';

const MenuItem = (props) => (
  <div>
    <div className="row my-4">
      <div className="col-8 justify-content-center">
        <div className="card">
          <img src={props.img} alt="photo-menu" />
          <div className="card-img-overlay text-white">
              <h5 className="card-title">{props.title.toUpperCase()}</h5>
              <span>Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MenuItem;