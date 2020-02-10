
import React from 'react';

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }

  }

  sendForm = () => {
    console.log('Funciona..!!')
  }

  handleChange = event => {
    const {name, value} = event.target
    console.log(name, value);
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="container my-5 d-flex">
        <div className="col-sm-12 col-md-5 col-lg-4 mx-auto">
          <h3 className="text-center">I already have an account</h3>
          <div>
            <form onSubmit={this.sendForm} className="py-5">
              <div className="form-group">
                <label> Email </label>
                <input
                  onChange={this.handleChange}
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="Email" value={this.state.email} required />
              </div>
              <div className="form-group">
                <label> Password </label>
                <input type="password" name="password"
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Password" value={this.state.password} required />
              </div>
              <div className="form-group d-flex justify-content-between pt-3">
                <button className="btn btn-success" type="submit"> SIGN IN </button>
                <button className="btn btn-primary"> SIGN IN WITH GOOGLE </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

export default Signin;