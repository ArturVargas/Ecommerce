
import React from 'react';
import { withRouter } from 'react-router-dom';

const MenuItem = (props) => (
  <div onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}>
    <div className="my-4">
      <div className="container">
        <div className="row d-flex">
          <div className="col-sm-12 col-md-4">
            <div className="card">
              <img src={props.img} alt="photo-menu" />
              <div className="card-img-overlay text-white">
                <h5 className="card-title">{props.title.toUpperCase()}</h5>
                <span>Shop Now</span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
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

    </div>
  </div>
);

export default withRouter(MenuItem);