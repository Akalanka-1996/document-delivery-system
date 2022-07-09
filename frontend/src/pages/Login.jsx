import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useState, useEffect } from 'react'


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  
  });

  const { email, password } = formData;

const onChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
}

const onSubmit = (e) => {
  e.preventDefault();

  console.log(formData)
}



  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please create an account</p>
      </section>
      <secton className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </secton>
    </>
  );
};

export default Login;
