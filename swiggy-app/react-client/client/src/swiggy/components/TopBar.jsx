// import { Link } from "react-router-dom"

// function TopBar() {
//   return (
//     <section className="topBarSection">
//       <div className="companyTitle">
//         <Link to="/" className="link">
//         <h2>Swiggy</h2>
//         </Link>
       
//       </div>
//       <div className="searchBar">
//         <input type="text" placeholder="search..."/>
//       </div>

//       <div className="userAuth">
//         Login/SignUp
//       </div>
      
//     </section>
//   )
// }

// export default TopBar


import { Link } from "react-router-dom";
import { useState } from "react";

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
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="userAuth">Login/SignUp</div>
    </section>
  );
}

export default TopBar;
