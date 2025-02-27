




import { useState, useEffect } from "react";
import { API_URL } from "../api";
import ChainSliders from "./ChainSliders";
import { BeatLoader } from "react-spinners"; 



const Chains = () => {
  const [vendorData, setVendorData] = useState([]);
  const [loading, setLoading] = useState(true)

  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors?order=desc`);
      const newData = await response.json();
      setVendorData(newData);
      console.log("this is API Data", newData);
      setLoading(false)
    } catch (error) {
      alert("Failed to fetch data");
      console.error("Failed to fetch data", error);
      setLoading(true)
    }
  };






  useEffect(() => {
    vendorFirmHandler();
  }, []);

  return (
    <>
    <div className="loaderSection">
    {
      loading && 
      <>
      <div className="loader">
       YOur food is Loading..............
      </div>
      
  <BeatLoader

color="#FF4500" size={12}
  
  />

      </>
    }
    </div>
    <div className="mediaChainSection">
      <h3 className="chainTitle">Top restaurant chains in Hyderabad</h3>


      <ChainSliders vendorData={vendorData}/>
    </div>
    </>
  );
};

export default Chains;







