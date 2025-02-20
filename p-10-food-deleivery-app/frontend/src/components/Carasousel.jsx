


const Carousel = () => {
    const divStyle = {
        backgroundImage: 'url(/bur.jpg)',
        backgroundSize: 'cover', // Ensures the image covers the entire element
        backgroundPosition: 'center', // Centers the image within the element
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        width: '100%', // Adjust as needed
        height: '500px' // Adjust as needed
      };



  return (
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


     
  );
};

export default Carousel;
