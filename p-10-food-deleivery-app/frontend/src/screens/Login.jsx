import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


    
function Login() {
  const [credentials, setCredentials] = useState({
       email: "", password: "",
     
  })
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
      e.preventDefault()
      const response = await fetch("http://localhost:5000/api/loginuser", {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",

          },
          body: JSON.stringify({
              password: credentials.password,
               email: credentials.email,
          })

         

      })


      const json = await response.json()
      console.log(json);
      console.log('====================================');


      if(!json.success){
          alert("enter valid credentials")
      }

      if(json.success){
        localStorage.setItem("authToken", json.authToken)
        // console.log(localStorage.getItem("authToken"));
        navigate("/")
    }
  }


  const onChange = (event)=>{
      setCredentials({...credentials, [event.target.name]: event.target.value})

  }


return (
  <div>
       <div className='container' >
    <form onSubmit={handleSubmit} className='w-50 m-auto mt-5 border bg-dark border-success rounded' >
      
      <div className="m-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" placeholder="Enter Email"/>
      </div>
      
      <div className="m-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control"  name='password' value={credentials.password} onChange={onChange} placeholder="Enter Paasword"/>
      </div>
     
      
      
      <button type="submit" className="m-3 btn btn-success">Submit</button>
      <Link to="/createuser" className="m-3 mx-1 btn btn-danger">NEW USER</Link>
    </form>
  </div>
  </div>
)
}
    
    export default Login