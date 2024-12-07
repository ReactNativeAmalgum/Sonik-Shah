import React from "react";
import SwiperServices from "./SwiperServices";
import Fade from 'react-reveal/Fade';
const HomeServices = () => {
  return (
    <>
      <section className="review pt_100 xs_pt_70 pb_100 xs_pb_70 py-5">
        <div className="container" bis_skin_checked={1}>
          <div className="row" bis_skin_checked={1}>
            <div className="col-xl-12" bis_skin_checked={1}>
              <Fade down>
              <div
                className="common_heading center_heading mb_45"
                bis_skin_checked={1}
              >
                <h5>Services</h5>
                <h2> Our Services</h2>
              </div>
              </Fade>
            </div>
          </div>
          <div
            className="row review_slider slick-initialized slick-slider slick-dotted"
            bis_skin_checked={1}
          >
            <SwiperServices />
        
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServices;
