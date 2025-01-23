import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    axios
      .get("http://localhost:5000/createUser")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data)
      })
      .catch((error) => console.error(error));
  },[]);


  const handleDelete = (id) =>{ 
    axios
    .delete(`http://localhost:5000/deleteUser/${id}`)
    .then((response) => {
      console.log(response.data);
     setUsers(response.data)
    })
    .catch((error) => console.error(error));

  }



  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          ADD New User
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">AGE</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>

                  <td>
                    <Link to={`/update/${user._id}`} className="btn btn-success">
                      UPDATE
                    </Link>
                    <button className="btn btn-danger" onClick={(e)=> handleDelete(user._id)}>DELETE</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
