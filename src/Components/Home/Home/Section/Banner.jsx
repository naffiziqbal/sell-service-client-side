import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const Banner = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div id="item1" className="carousel-item w-full">
            <div className="absolute text-3xl font-bold text-yellow-500 top-2/4">
              <p>Machine That Every One Desire</p>
            </div>
            <img
              src="https://i.ibb.co/7bfB3Yv/harley-davidson-1-HZc-Jjdtc9g-unsplash.jpg"
              alt=""
              className="w-full opacity-20"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="item2" className="relative carousel-item w-full">
            <div className="absolute text-3xl font-bold text-yellow-500 top-2/4">
              <p>Machine That Every One Loves</p>
            </div>
            <img
              src="https://i.ibb.co/WvLHQ8t/harley-davidson-ee-TJKC-wz34-unsplash.jpg"
              alt=""
              className="w-full opacity-20"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div id="item3" className="relative carousel-item w-full">
            <div className="absolute text-3xl font-bold text-yellow-500 top-2/4">
              <p>Machine That Every One Urges</p>
            </div>
            <img
              src="https://i.ibb.co/NnKhrjJ/marcus-ganahl-olwehv-Chxfg-unsplash.jpg"
              alt=""
              className="w-full opacity-20"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className=" relative carousel w-full">
        {/* <div id="item1" className="carousel-item w-full">
        <div className="absolute text-3xl font-bold text-yellow-500 top-2/4">
            <p>
              Machine That Every One Desire
            </p>
          </div>
          <img src="https://i.ibb.co/7bfB3Yv/harley-davidson-1-HZc-Jjdtc9g-unsplash.jpg" alt="" className="w-full opacity-20" />
        </div> */}
        {/* <div id="item2" className="relative carousel-item w-full">
          <div className="absolute text-3xl font-bold text-yellow-500 top-2/4">
            <p>Machine That Every One Loves</p>
          </div>
          <img
            src="https://i.ibb.co/WvLHQ8t/harley-davidson-ee-TJKC-wz34-unsplash.jpg"
            alt=""
            className="w-full opacity-20"
          />
        </div> */}
        {/* <div id="item3" className="relative carousel-item w-full">
          <div className="absolute text-3xl font-bold text-yellow-500 top-2/4">
            <p>Machine That Every One Urges</p>
          </div>
          <img
            src="https://i.ibb.co/NnKhrjJ/marcus-ganahl-olwehv-Chxfg-unsplash.jpg"
            alt=""
            className="w-full opacity-20"
          />
        </div> */}
      </div>
      
      {/* <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div> */}
    </div>
  );
};

export default Banner;
