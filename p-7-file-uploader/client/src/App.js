import "./App.css";

function App() {
  return (
    <div classNameName="conatiner">
      <div classNameName="row">
        <div
          classNameName="col-md-12"
          style={{ backgroundColor: "blue", color: "white" }}
        >
          FILE UPLOADER
        </div>
        <div className="d-flex">
          {/* form */}
        <div classNameName="col-md-6">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
               Name
              </label>
              <input
                type="text"
                name="name"
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
                name="number"
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
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>


         {/* form */}
         <div classNameName="col-md-6">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
               Name
              </label>
              <input
                type="text"
                name="name"
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
                name="number"
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
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
       
        </div>


        
      </div>
    </div>
  );
}

export default App;
