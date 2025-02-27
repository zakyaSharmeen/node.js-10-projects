import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function CitiesList() {
  const cities = [
    "Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai", 
    "Pune", "Kolkata", "Chennai", "Ahmedabad", "Chandigarh", "Jaipur"
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <section className="cities-section">
      <h2>Cities with food delivery</h2>
      <div className="cities-grid">
      {cities.slice(0, showAll ? cities.length : 7).map((city, index) => (
          <div key={index} className="city-card">
            Order food online in <strong>{city}</strong>
          </div>
        ))}
        {!showAll && (
          <div className="city-card show-more" onClick={() => setShowAll(true)}>
            Show More <FaChevronDown />
          </div>
        )}
      </div>
    </section>
  );
}

export default CitiesList;
