import React from "react";

const SignUp = () => {
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="work" className="form-label">
            Your Name
          </label>
          <input type="text" className="form-control" id="work" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text"></div>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Your Phone
          </label>
          <input type="number" className="form-control" id="phone" />
        </div>

        <div className="mb-3">
          <label htmlFor="work" className="form-label">
            Your role
          </label>
          <input type="text" className="form-control" id="work" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>

        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input type="password" className="form-control" id="cpassword" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
