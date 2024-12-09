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

const Testimonials = () => {
  return (
    <>
      {/* <Bounce> */}
      <section
        className="service testimonials-section"

      >
        <div className="service_overlay py-5 pt_100 xs_pt_70 pb_100 xs_pb_70">
          <div className="container">
            <Bounce>
              <div className="row" bis_skin_checked={1}>
                <div className="col-xl-12" bis_skin_checked={1}>
                  <div className="common_heading center_heading mb-5" bis_skin_checked={1}>
                    <h5>Testimonials</h5>
                    <h2>What Our Client Says</h2>
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

                    <div className="single_review" bis_skin_checked={1}>
                      <p className="review_icon">
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                      </p>
                      <p>
                        Sir U came for my surgery in virar east Bhushan Hospital?? I just heard ur name there.. M so thankful of u. .. Patient name sarika pawar
                      </p>
                      <div className="reviewer_info" bis_skin_checked={1}>
                        <div className="img" bis_skin_checked={1}>
                          <img
                            src="https://sk-wallpaper.vercel.app/static/media/img_avatar3.9ced398fb53bae1e911d.webp"
                            alt="reviewer"
                            className="img-fluid w-100"
                          />
                        </div>
                        <h3>Harshit Pawar</h3>
                        <span>Customer</span>
                      </div>
                    </div>

                  </Fade>
                </SwiperSlide>
                <SwiperSlide>
                  <Fade up>
                    <div className="single_review" bis_skin_checked={1}>
                      <p className="review_icon">
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                      </p>
                      <p>
                      MY Mom Knee Pain and Dr Sonik Shah has treated Very well So Nice Doctor and Down to earth Doctor Thankyou so Much Dr.
                      </p>
                      <div className="reviewer_info" bis_skin_checked={1}>
                        <div className="img" bis_skin_checked={1}>
                          <img
                            src="https://sk-wallpaper.vercel.app/static/media/img_avatar3.9ced398fb53bae1e911d.webp"
                            alt="reviewer"
                            className="img-fluid w-100"
                          />
                        </div>
                        <h3>Aatish Mishra</h3>
                        <span>Customer</span>
                      </div>
                    </div>

                  </Fade>
                </SwiperSlide>
                <SwiperSlide>
                  <Fade up>
                    <div className="single_review" bis_skin_checked={1}>
                      <p className="review_icon">
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                      </p>
                      <p>
                      Excellent, handling with care. Knowledgeable person with good experience I can say. He has done my knee surgery. Surgery was successful and nowadays I am doing very well, even my physiotherapy doctor said you doing very well as per your injuries. Without any hesitation go ahead with Dr. Sonik sir. All the Best.
                      </p>
                      <div className="reviewer_info" bis_skin_checked={1}>
                        <div className="img" bis_skin_checked={1}>
                          <img
                            src="https://sk-wallpaper.vercel.app/static/media/img_avatar3.9ced398fb53bae1e911d.webp"
                            alt="reviewer"
                            className="img-fluid w-100"
                          />
                        </div>
                        <h3>Rohit Sharma</h3>
                        <span>Customer</span>
                      </div>
                    </div>

                  </Fade>
                </SwiperSlide>
                <SwiperSlide>
                  <Fade up>
                    <div className="single_review" bis_skin_checked={1}>
                      <p className="review_icon">
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                      </p>
                      <p>
                      I am 63 yrs old female undergone shoulder surgery on 19th May done by Dr Sonik Shah and his team.Full care was taken throughout the treatment and surgery and God bless him and his staff for making me comfortable till my discharge.
                      </p>
                      <div className="reviewer_info" bis_skin_checked={1}>
                        <div className="img" bis_skin_checked={1}>
                          <img
                            src="https://sk-wallpaper.vercel.app/static/media/img_avatar3.9ced398fb53bae1e911d.webp"
                            alt="reviewer"
                            className="img-fluid w-100"
                          />
                        </div>
                        <h3>Vipul Katariya</h3>
                        <span>Customer</span>
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

export default Testimonials