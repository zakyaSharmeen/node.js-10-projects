




import { useState, useEffect } from "react";
import { API_URL } from "../api";
import ChainSliders from "./ChainSliders";
import { ColorRing} from "react-loader-spinner"


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
      
  <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
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







