import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { API_URL } from "../api";

function ChainSliders({ vendorData }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = ".custom-prev";
      swiperRef.current.swiper.params.navigation.nextEl = ".custom-next";
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, [vendorData]);

  return (
    <div style={{ position: "relative" }}>
      <div className="custom-navigation">
        <button className="custom-prev">‹</button>
        <button className="custom-next">›</button>
      </div>

      <section className="chainSection" id="chainGallery">
        <Swiper
          ref={swiperRef} // Attach Swiper instance
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          {vendorData.vendors &&
            vendorData.vendors.map((vendor, vendorIndex) =>
              vendor.firm.map((item, firmIndex) => (
                <SwiperSlide key={`${vendorIndex}-${firmIndex}`}>
                  <div className="firmImage">
                    {/* <img src={`${API_URL}/uploads/uploads/${item.image}`} alt={item.firmName} /> */}
                    {/* <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmName} /> */}
                    <img src= "/assets/item/Poori.jpg" alt={item.firmName} />


                    {/* <img
                      src={
                        item.image
                          ? `${API_URL}/uploads/${item.image}`
                          : "https://via.placeholder.com/150"
                      }
                      alt={item.firmName || "Firm Image"}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    /> */}
                    {/* <img
                      src={`${API_URL}/uploads/${item.image}`}
                      alt={item.firmName || "Firm Image"}
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "/assets/item/Dosa.jpg"; 
                      }}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    /> */}
                    

                  </div>
                  <div>{item.firmName}</div>
                </SwiperSlide>
              ))
            )}
        </Swiper>
      </section>

      {/* Custom styles */}
      <style>{`
        .custom-navigation {
          position: absolute;
          top: -40px;
          right: 10px;
          display: flex;
          gap: 10px;
        }
        .custom-prev,
        .custom-next {
          background: gray;
          color: white;
          border: none;
          padding: 10px 15px;
          font-size: 18px;
          cursor: pointer;
          border-radius: 50%;
        }
        .custom-prev:hover,
        .custom-next:hover {
          background: light-gray;
        }
      `}</style>
    </div>
  );
}

export default ChainSliders;
