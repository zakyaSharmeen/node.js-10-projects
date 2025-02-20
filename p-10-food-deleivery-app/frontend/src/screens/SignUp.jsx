import { useState } from "react"
import { Link } from "react-router-dom"

    
    function SignUp() {
        const [credentials, setCredentials] = useState({
            name: "", email: "", password: "",
            geolocation: ""
        })

        const handleSubmit = async (e) =>{
            e.preventDefault()
            const response = await fetch("http://localhost:5000/api/createuser", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({
                    name: credentials.name,
                    password: credentials.password,
                     email: credentials.email,
                    location: credentials.geolocation
                })

               

            })


            const json = await response.json()
            console.log(json);
            console.log('====================================');


            if(!json.success){
                alert("enter valid credentials")
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
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" placeholder="Enter Name" />
            </div>
            <div className="m-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" placeholder="Enter Email"/>
            </div>
            
            <div className="m-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control"  name='password' value={credentials.password} onChange={onChange} placeholder="Enter Paasword"/>
            </div>
           
            <div className="m-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange}  placeholder="Enter GeoLocation"/>
            </div>
            
            <button type="submit" className="m-3 btn btn-success">Submit</button>
            <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
          </form>
        </div>
        </div>
      )
    }
    
    export default SignUp