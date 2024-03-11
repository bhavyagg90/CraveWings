import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  // State to store form input values
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  
//dfdagdgdsga ds 
//sd gdsa gsa
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
      }),
    });

    // Parse the JSON response from the server
    const json = await response.json();
    console.log(json);

    // If the server indicates an unsuccessful response, show an alert
    if (!json.success) {
      alert("Enter valid Credentials");
    }
  };

  // Handle changes in form inputs and update the state
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  // Render the signup form using JSX
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          {/* Name input */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>

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

          {/* Address input */}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="location"
              value={credentials.location}
              onChange={onChange}
            />
          </div>

          {/* Submit button */}
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>

          {/* Link to login page */}
          <Link to="/login" className="m-3 btn btn-danger">
            Already a User
          </Link>
        </form>
      </div>
    </>
  );
}
