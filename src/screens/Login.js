import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    
    location: "",
  });
  const navigate = useNavigate();
REGEGAFDB
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to the server with form data
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    
    const json = await response.json();
    console.log(json);

    // If the server indicates an unsuccessful response, show an alert
    if (!json.success) {
      alert("Enter valid Credentials");
    }
    if(json.success){
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"))
      navigate("/");
    }
   
  };

  // Handle changes in form inputs and update the state
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {/* Email input */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        {/* Password input */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>

        {/* Link to login page */}
        <Link to="/createuser" className="m-3 btn btn-danger">
          I'm a New User
        </Link>
      </form>
    </div>
  );
}
