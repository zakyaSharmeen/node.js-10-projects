
import Home from './screens/Home'
import {  Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import SignUp from './screens/SignUp';


function App() {

  return (
    <>
     
      
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<SignUp />} />

        </Routes>
     
  

    
    </>
  )
}

export default App
