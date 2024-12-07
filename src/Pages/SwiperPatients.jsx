import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Bounce from 'react-reveal/Bounce';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Fade from "react-reveal/Fade";

// import required modules
import { Pagination } from 'swiper/modules';

const SwiperPatients = () => {
  return (
    <>
    {/* <Bounce> */}
              <section
  className="service"
  style={{ background: "url(https://html.themefax.com/madifax/images/service_bg.jpg)" }}
>
  <div className="service_overlay py-5 pt_100 xs_pt_70 pb_100 xs_pb_70">
    <div className="container">
    <Bounce>
      <div className="row">
        <div className="col-xl-12">
          <div className="common_heading center_heading mb_15">
            <h5>our Patient</h5>
            <h2>our Patient Images</h2>
          </div>
        </div>
      </div>
      </Bounce>
      <div className="row service_slider slick-initialized slick-slider slick-dotted">
      
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
    animationName: "fadeInUp"
  }}
>
  <div className="single_service">
    <div className="service_img">
      {/* <span className="tf_service_icon">
        <i className="fas fa-eye" aria-hidden="true" />
      </span> */}
      <img
        src="https://images.rawpixel.com/image_1100/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczc3LW1ja2luc2V5LTc2MTEtcG9tXzMuanBn.jpg"
        alt="service img"
        className="img-fluid w-100"
      />
    </div>
    <div className="service_text">
      <a href="service_details.html" className="service_heading" tabIndex={-1}>
        Online Monitoring
      </a>
      <p>
        Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem quia
        officia quaerat ipsam hic sunt quaerat!
      </p>
      {/* <a href="service_details.html" className="service_link" tabIndex={-1}>
        read more <i className="far fa-long-arrow-right" aria-hidden="true" />
      </a> */}
    </div>
  </div>
</div>
        </Fade>
        </SwiperSlide>
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
    animationName: "fadeInUp"
  }}
>
  <div className="single_service">
    <div className="service_img">
      {/* <span className="tf_service_icon">
        <i className="fas fa-eye" aria-hidden="true" />
      </span> */}
      <img
        src="https://images.rawpixel.com/image_1100/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczc3LW1ja2luc2V5LTc2MTEtcG9tXzMuanBn.jpg"
        alt="service img"
        className="img-fluid w-100"
      />
    </div>
    <div className="service_text">
      <a href="service_details.html" className="service_heading" tabIndex={-1}>
        Online Monitoring
      </a>
      <p>
        Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem quia
        officia quaerat ipsam hic sunt quaerat!
      </p>
      {/* <a href="service_details.html" className="service_link" tabIndex={-1}>
        read more <i className="far fa-long-arrow-right" aria-hidden="true" />
      </a> */}
    </div>
  </div>
</div>
        </Fade>
        </SwiperSlide>
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
    animationName: "fadeInUp"
  }}
>
  <div className="single_service">
    <div className="service_img">
      {/* <span className="tf_service_icon">
        <i className="fas fa-eye" aria-hidden="true" />
      </span> */}
      <img
        src="https://images.rawpixel.com/image_1100/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczc3LW1ja2luc2V5LTc2MTEtcG9tXzMuanBn.jpg"
        alt="service img"
        className="img-fluid w-100"
      />
    </div>
    <div className="service_text">
      <a href="service_details.html" className="service_heading" tabIndex={-1}>
        Online Monitoring
      </a>
      <p>
        Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem quia
        officia quaerat ipsam hic sunt quaerat!
      </p>
      {/* <a href="service_details.html" className="service_link" tabIndex={-1}>
        read more <i className="far fa-long-arrow-right" aria-hidden="true" />
      </a> */}
    </div>
  </div>
</div>
        </Fade>
        </SwiperSlide>
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
    animationName: "fadeInUp"
  }}
>
  <div className="single_service">
    <div className="service_img">
      {/* <span className="tf_service_icon">
        <i className="fas fa-eye" aria-hidden="true" />
      </span> */}
      <img
        src="https://images.rawpixel.com/image_1100/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczc3LW1ja2luc2V5LTc2MTEtcG9tXzMuanBn.jpg"
        alt="service img"
        className="img-fluid w-100"
      />
    </div>
    <div className="service_text">
      <a href="service_details.html" className="service_heading" tabIndex={-1}>
        Online Monitoring
      </a>
      <p>
        Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem quia
        officia quaerat ipsam hic sunt quaerat!
      </p>
      {/* <a href="service_details.html" className="service_link" tabIndex={-1}>
        read more <i className="far fa-long-arrow-right" aria-hidden="true" />
      </a> */}
    </div>
  </div>
</div>
        </Fade>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>


        {/* <ul className="slick-dots" style={{}} role="tablist">
          <li className="slick-active" role="presentation">
            <button
              type="button"
              role="tab"
              id="slick-slide-control00"
              aria-controls="slick-slide00"
              aria-label="1 of 2"
              tabIndex={0}
              aria-selected="true"
            >
              1
            </button>
          </li>
          <li role="presentation" className="">
            <button
              type="button"
              role="tab"
              id="slick-slide-control01"
              aria-controls="slick-slide01"
              aria-label="2 of 2"
              tabIndex={-1}
            >
              2
            </button>
          </li>
          <li role="presentation" className="">
            <button
              type="button"
              role="tab"
              id="slick-slide-control02"
              aria-controls="slick-slide02"
              aria-label="3 of 2"
              tabIndex={-1}
            >
              3
            </button>
          </li>
          <li role="presentation" className="">
            <button
              type="button"
              role="tab"
              id="slick-slide-control03"
              aria-controls="slick-slide03"
              aria-label="4 of 2"
              tabIndex={-1}
            >
              4
            </button>
          </li>
        </ul> */}
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default SwiperPatients