import LandingPage from "./swiggy/pages/LandingPage";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import ProductMenu from "./swiggy/components/ProductMenu";

function App() {
  return (
    <>
   
   <Routes>
      
          <Route path="/" element={<LandingPage />} />

          <Route path="/products/:firmId/:firmName" element={<ProductMenu />} />


          
      </Routes>
    </>
  )
}

export default App;  
