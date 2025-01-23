import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from 'react-router-dom';
import User from './components/User';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<User />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />

        </Routes>
      </div>
    </>
  );
}

export default App;