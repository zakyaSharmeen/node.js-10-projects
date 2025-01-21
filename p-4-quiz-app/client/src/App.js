import './App.css';
import {  Routes, Route } from "react-router-dom";
import Main from './components/Main';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { CheckUserExist } from './helper/helper';


function App() {
  return (
   
    
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/quiz" element={<CheckUserExist><Quiz/></CheckUserExist>} />
      <Route path="/result" element={<CheckUserExist><Result/></CheckUserExist>}/>
    </Routes>
 
  );
}

export default App;
