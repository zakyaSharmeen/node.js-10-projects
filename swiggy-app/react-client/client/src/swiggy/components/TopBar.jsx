



import { Link } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // ✅ Import Search Icon

function TopBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <section className="topBarSection">
      <div className="companyTitle">
        <Link to="/" className="link">
          <h2>Swiggy</h2>
        </Link>
      </div>

      <div className="searchBar">
        <FaSearch className="searchIcon" /> 
        <input
          type="search"
          placeholder="Search for restaurants, dishes..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="searchInput"
        />
      </div>

      <div className="userAuth">Login/SignUp</div>
    </section>
  );
}

export default TopBar;
