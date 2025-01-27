import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [render, setRender] = useState(false);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [profile, setProfile] = useState();

  useEffect(() => {
    const getAllUsers = async () => {
      const getAllData = await axios.get("http://localhost:9000/api/v1/users");
      console.log(getAllData.data);
      setUsers(getAllData.data);
    };
    getAllUsers();
  }, []);

  const formdata = new FormData();
  formdata.append("name", inputs.name);
  formdata.append("email", inputs.email);
  formdata.append("age", inputs.age);
  formdata.append("profile", profile);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/api/v1/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await axios.post(
  //       "http://localhost:9000/api/v1/users",
  //       formdata
  //     );
  //     setRender(true);
  //     setInputs({
  //       name: "",
  //       email: "",
  //       age: "",
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // sendng to  bk-end
      const response = await axios.post(
        "http://localhost:9000/api/v1/users",
        formdata
      );

      // Add the new user to the state without refreshing
      setUsers([...users, response.data]);  // Add the newly created user to the users array

      // Reset the form inputs
      setInputs({
        name: "",
        email: "",
        age: "",
      });
      setProfile(null);  // Clear the profile picture input

    } catch (err) {
      console.log(err);
    }
};




  return (
    <div
      className="conatiner"
      style={{ width: "1200px", margin: "auto", padding: "15px" }}
    >
      <div className="row">
        <div
          className="col-md-12"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "15px",
            textAlign: "center",
            fontSize: "30px",
            marginBottom: "15px",
          }}
        >
          FILE UPLOADER
        </div>
        <div className="row">
          {/* form */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={inputs.name}
                  onChange={(e) =>
                    setInputs({
                      ...inputs,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={inputs.email}
                  onChange={(e) =>
                    setInputs({
                      ...inputs,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={inputs.age}
                  onChange={(e) =>
                    setInputs({
                      ...inputs,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Profile
                </label>
                <input
                  type="file"
                  name="profile"
                  onChange={(e) => setProfile(e.target.files[0])}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          {/* displaying */}
          <div className="col-md-6">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">NAME</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">AGE</th>
                  <th scope="col">PROFILE</th>
                  <th scope="col">DELETE</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user) => {
                    return (
                      <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>

                        <td>
                          <img
                            className="img img-fluid"
                            alt="users-images"
                            src={`http://localhost:9000/${user.profile}`}
                            style={{
                              width: "60px",
                              height: "60px",
                              alignItems: "center",
                            }}
                          ></img>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(user._id)}
                          >
                            DELETE
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
