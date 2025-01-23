

import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    if (!name || !email || !age) {
      alert("OOPs All fields are required!");
      return;
    }

    // Sendg data to backend crted 
    axios
      .post("http://localhost:5000/createUser", { name, email, age })
      .then((response) => {console.log(response.data)
        navigate("/")
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="card p-4" style={{ width: "400px" }}>
        <h1>ADD USER</h1>

        <form onSubmit={Submit}>
          <div className="mb-3 row">
            <label
              htmlFor="exampleFormControlInput1"
              className="col-sm-4 col-form-label"
            >
              User Name
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)} // Set name
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="exampleFormControlInput2"
              className="col-sm-4 col-form-label"
            >
              Email Address
            </label>
            <div className="col-sm-8">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)} // Set email
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="exampleFormControlInput3"
              className="col-sm-4 col-form-label"
            >
              User's Age
            </label>
            <div className="col-sm-8">
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)} // Set age
              />
            </div>
          </div>

          {/* Button is inside the form */}
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
