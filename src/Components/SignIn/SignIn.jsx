
import React from 'react';

const Signin = () => (
  <div className="container my-5 d-flex">
    <div className="col-sm-12 col-md-5 col-lg-4 mx-auto">
      <h3 className="text-center">I already have an account</h3>
      <div>
        <form action="" className="py-5">
          <div className="form-group">
            <label> Email </label>
            <input type="text" className="form-control" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label> Password </label>
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
          <div className="form-group d-flex justify-content-between pt-3">
            <button className="btn btn-success"> SIGN IN </button>
            <button className="btn btn-primary"> SIGN IN WITH GOOGLE </button>
          </div>
        </form>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-6 mx-auto">
      <h3 className="text-center">I do not have a account</h3>
      <div>
        <form action="" className="py-5">
          <div className="form-group">
            <label> Name </label>
            <input type="text" className="form-control" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label> Email </label>
            <input type="text" className="form-control" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label> Password </label>
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label> Confirm Password </label>
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
          <div className="form-group d-flex justify-content-cneter pt-3">
            <button className="btn btn-success"> SIGNUP </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Signin;