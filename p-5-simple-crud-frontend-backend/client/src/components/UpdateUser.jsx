import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getUser/${id}`)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/updateUser/${id}`, {
      name,
      email,
      age,
    })
    .then(result => {
      console.log(result);
      navigate("/")
      
    })
    .catch(err=> console.log(err))}
    
    
  

  return (
    <div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="card p-4" style={{ width: "400px" }}>
          <h1>UPDATE USER</h1>

          <form action="" onSubmit={Update}>
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
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="exampleFormControlInput2"
                className="col-sm-4 col-form-label"
              >
                Email address
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="exampleFormControlInput3"
                className="col-sm-4 col-form-label"
              >
                Users Age
              </label>
              <div className="col-sm-8">
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="name@example.com"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
            </div>
            <button className="btn btn-success">Updated</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
