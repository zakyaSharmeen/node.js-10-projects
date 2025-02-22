import { useEffect, useState } from "react";
// import Carasousel from "../components/Carasousel";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);
  const [search, setSearch] = useState("");




  const divStyle = {
    backgroundImage: 'url(/bur.jpg)',
    backgroundSize: 'cover', // Ensures the image covers the entire element
    backgroundPosition: 'center', // Centers the image within the element
    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    width: '100%', // Adjust as needed
    height: '500px' // Adjust as needed
  };


  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    // console.log(response[0], response[1]);
    setfoodItem(response[0]);
    setFoodCat(response[1]);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {/* ----------------------------------------------------- */}
      <div>
        <Navbar />
      </div>
      
      {/* ---------------------------------------------------------- */}
      {/* carasoul */}
      <div>
      <div className="mt-10">
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" >
          <div className="carousel-item active">
            
            <div style={divStyle}></div>
            <div className="carousel-caption d-none d-md-block">
              <div className="form-inline d-flex justify-content-center">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) =>setSearch(e.target.value)}
                />
               
              </div>
            </div>
           
          </div>
          <div className="carousel-item">
            
            <div style={divStyle}></div>
            <div className="carousel-caption d-none d-md-block">
              <form className="form-inline d-flex">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success bg-success text-white my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
           
          </div>
          <div className="carousel-item">
            
            <div style={divStyle}></div>
            <div className="carousel-caption d-none d-md-block">
              <form className="form-inline d-flex">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success bg-success text-white my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
           
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
      </div>

    

      {/* ------------------------------------------------------------ */}
      {/* individual cards  */}
      <div className="container">
        {foodCat.length > 0 ? (
          foodCat.map((data, _id) => (
            <div key={_id} className="row mb-3">
              <div  className="fs-3 m-3">{data.CategoryName}</div>

              <hr />
              {foodItem.length > 0 ? (
                foodItem
                  .filter((item) => (item.CategoryName === data.CategoryName )&& (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                  .map((filterItems) => (
                    <div key={filterItems._id} className="col-12 col-md-6 col-lg-3 m-2">
                      <Card 
                      foodItem = {filterItems}
                      options = {filterItems.options[0]}
                      // imgSrc = {filterItems.img}

                      />
                    </div>
                  ))
              ) : (
                <div>no fooditem found....</div>
              )}
            </div>
          ))
        ) : (
          <div>nahhhhhh.... category found</div>
        )}

      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
