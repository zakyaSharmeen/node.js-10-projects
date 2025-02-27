


// ------------------------------------------


import { useEffect, useState } from "react";
import { API_URL } from "../api";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";

function FirmCollection() {
  const [firmData, setFirmData] = useState({ vendors: [] });
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [activeCategory, setActiveCategary] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const firmDataHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const newFirmData = await response.json();
      setFirmData(newFirmData);
    } catch (err) {
      alert("Firm data not fetched");
      console.error("Error:", err);
    }
  };

  const filterHandler = (region, category) => {
    setSelectedRegion(region);
    setActiveCategary(category);
  };

  useEffect(() => {
    firmDataHandler();
  }, []);

  const filteredFirms = firmData.vendors?.flatMap((apple) =>
    apple.firm.filter(
      (item) =>
        (selectedRegion === "All" ||
          item.region.some((region) =>
            region.toLowerCase().includes(selectedRegion.toLowerCase())
          )) &&
        item.firmName.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <TopBar onSearch={setSearchTerm} />
      <h3>Restaurants with online food delivery</h3>
      <div className="filterButtons">
        <button onClick={() => filterHandler("All", "all")} className={activeCategory === "all" ? "activeButton" : ""}>
          All
        </button>
        <button onClick={() => filterHandler("South-Indian", "south-Indian")} className={activeCategory === "south-Indian" ? "activeButton" : ""}>
          South-Indian
        </button>
        <button onClick={() => filterHandler("North-Indian", "north-Indian")} className={activeCategory === "north-Indian" ? "activeButton" : ""}>
          North-Indian
        </button>
        <button onClick={() => filterHandler("Chinese", "chinese")} className={activeCategory === "chinese" ? "activeButton" : ""}>
          Chinese
        </button>
        <button onClick={() => filterHandler("Bakery", "bakery")} className={activeCategory === "bakery" ? "activeButton" : ""}>
          Bakery
        </button>
      </div>
      <section className="firmSection">
        {filteredFirms.map((item) => (
          <Link to={`/products/${item._id}/${item.firmName}`} key={item._id}>
            <div className="firmGroup">
              <div className="firmImage">
                <img src="/assets/item/Poori.jpg" alt={item.firmName} />
              </div>
              <div className="firmOffer">{item.offer}</div>
              <div className="firmDetails">
                <strong>{item.firmName}</strong>
                <br />
                <div className="firmArea">{item.region?.join(", ")}</div>
                <div className="firmArea">{item.area}</div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

export default FirmCollection;




