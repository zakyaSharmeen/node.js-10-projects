import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Success from './Pages/Success';
import PageNotFound from './Pages/PageNotFound';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/success' element={<Success/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>

    </Routes>

    </>
  )
}

export default App;
