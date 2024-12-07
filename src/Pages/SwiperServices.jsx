import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ServiceData from "../Asserts/ServiceData";
// import required modules
import Fade from "react-reveal/Fade"
import { Pagination } from 'swiper/modules';
const SwiperServices = () => {
  return (
    <>
 <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
       {ServiceData.map((v,i)=>{
        return(<>
     
            <SwiperSlide>
            <Fade up>
        <div
              className=" wow fadeInUp"
              data-wow-duration="1s"
              style={{
                width: "100%",
                display: "inline-block",
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="single_service">
                <div className="service_img">
                  <span className="tf_service_icon">
                    <i className="fas fa-eye" aria-hidden="true" />
                  </span>
                  <img
                    src={v.serviceImg}
                    alt="service img"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="service_text">
                  <a
                    href="service_details.html"
                    className="service_heading"
                    tabIndex={-1}
                  >
                    {v.ServiceName}
                  </a>
                  <p>
                  {v.ServiceDescription}
                  </p>
                  <a
                    href="service_details.html"
                    className="service_link"
                    tabIndex={-1}
                  >
                    read more{" "}
                    <i className="far fa-long-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              
            </div>
            </Fade>
        </SwiperSlide>
        
        </>)
       })}
      
      </Swiper>
    </>
  )
}

export default SwiperServices