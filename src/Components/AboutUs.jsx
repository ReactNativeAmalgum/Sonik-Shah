import React from 'react'
import Breadcrumb from '../Pages/Breadcrumb'
import { FaTrophy } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import workbg from "../Asserts/work_bg.webp";
import helpLine from "../Asserts/helpline_img.webp";
import { FaRegMessage } from "react-icons/fa6";
import counterBg from "../Asserts/counter_bg.webp";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { MetaTags } from 'react-meta-tags';
import galleryData from '../Asserts/galleryData';

const AboutUs = () => {
  return (
    <>
      <MetaTags>
        <title>Orthopedic Doctor in Kandivali | Sonik Shah</title>
        <meta title="Orthopedic Doctor in Kandivali | Sonik Shah" />
        <meta name="description" content="Best Orthopedic Surgeon in Kandivali, Orthopedic Doctor in Kandivali, Golden Knee Replacement in Kandivali, Best Trauma Surgeons in Kandivali, Best Orthopedic in Kandivali, Knee Surgeon in kandivali,best shoulder specialist in Kandivali,Hip Surgeon in Kandivali, Partial Knee Replacement in Kandivali, Robotic Knee Replacement Surgeon in Kandivali, Best Arthroscopy Doctors in Kandivali, Ortho Specialist in Kandivali, Orthopedic Care near Kandivali" />
        <link rel="canonical" href="https://drsonikshah.com/" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="Orthopedic Doctor in Kandivali | Sonik Shah" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drsonikshah.com/" />
        <meta property="og:description" content="Find leading Orthopedic Doctors in Kandivali providing specialized care for bone and joint problems. Our experts offer comprehensive treatment options." />
        <meta property="og:image" content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png" />
      </MetaTags>
      <Breadcrumb title={'About Us'} />
      <section className="about_page">
        <div className='head-cont'>
          <h1 className='special-h1'>Orthopedic Doctor in Kandivali</h1>
        </div>
        <section className="about pt_100 xs_pt_70 pb_100 xs_pb_70 py-5 ">
          <div className="container">
            <div className="row">
              <Fade right>
                <div
                  className="col-xl-6 col-sm-9  col-lg-5 col-md-7 wow fadeInLeft"
                  data-wow-duration="1s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <div className="about_img">
                    <div className="about_img_1">
                      {/* <img
                        src="https://html.themefax.com/madifax/images/about-img1.jpg"
                        alt="Orthopedic Doctor in Kandivali"
                        className="img-fluid w-100"
                      /> */}
                    </div>
                    <div className="about_img_2">
                      <img
                        src={galleryData.dr}
                        alt="Orthopedic Doctor in Kandivali"
                        className="img-fluid w-100"
                      />
                      {/* <a
                    className="play_btn venobox vbox-item"
                    data-autoplay="true"
                    data-vbtype="video"
                    href="https://youtu.be/nqye02H_H6I"
                  >
                    <i className="fas fa-play" aria-hidden="true" />
                  </a> */}
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade left>
                <div
                  className="col-xl-6 col-sm-12 col-lg-7  wow fadeInRight"
                  data-wow-duration="1s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="common_heading">
                    <h5>PROFILE</h5>
                    <h2>DR. SONIK B. SHAH   </h2>
                    {/* <span className='qualification'> M.S.( ORTHO) MUMBAI <br /> Consultant Orthopedic surgeon Joint replacement,Arthroscopy & sports medicine</span> <br /> */}
                    <p>
                      Dr Sonik Shah, a passionate orthopedic doctor in Kandivali, is dynamic and loves sports. For more than ten years, he has been offering top-notch orthopaedic therapy to patients in Mumbai and throughout the nation. Dr. Shah is well-known for his great surgical results and caring attitude, placing a high priority on the cooperative connections he develops with his patients.
                    </p>
                    <p>
                      At Nair Hospital and Shatabdi Hospital, both known for their high patient turnover rates, Dr. Shah refined his clinical skills. His early training in primary and complex trauma surgery at the community level inspired him to specialize in minimally invasive joint replacement surgery under the guidance of eminent Mumbai specialists. As an esteemed orthopedic doctor in Kandivali, Dr. Shah continues to provide exceptional care and innovative treatments to his patients.
                    </p>
                    <p>
                      Academic Background
                      Dr. D. Y. PATIL MEDICAL COLLEGE, MUMBAI, is where he completed his medical education. At Sion Hospital, he honed his primary procedures and obtained clinical experience.
                      His postgraduate studies at Dr. D. Y. Patil Medical College in Mumbai led to him earning a Master of Surgery (M.S. Orthopedics).

                    </p>
                  </div>
                  <ul className="about_iteam d-flex flex-wrap">
                    <li className='fs-6'>Patients Start walking in few hours of surgery</li>
                    <li className='fs-6'>Patients start climbing the staircase from second day of his surgery.</li>
                    <li className='fs-6'>Patients Discharge with in 3 Days from the Hospital after surgery.</li>
                    <li className='fs-6'>No blood loss during the surgery, no blood Transfusion required.</li>
                    <li className='fs-6'>Less Physiotherapy.( No Physiotherapist required for home)</li>
                    <li className='fs-6'>Less Antibiotic.</li>
                    <li className='fs-6'>Stitchless Surgery. </li>
                    <li className='fs-6'>Recovery time is just two – three week.</li>
                  </ul>
                  {/* <a href="about.html" className="common_btn">
                Discover More
              </a> */}
                </div>
              </Fade>
            </div>
          </div>
        </section>
        <div className="about_counter section-custom-padding" bis_skin_checked={1}>
          <div className="container" bis_skin_checked={1}>
            <Fade>
              <div
                className="about_counter_bg"
                style={{ background: `url("${counterBg}")` }}
                bis_skin_checked={1}
              >
                <div className="row" bis_skin_checked={1}>
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      animationDuration: "1s",
                      animationName: "fadeInUp"
                    }}
                    bis_skin_checked={1}
                  >
                    <div className="single_counter" bis_skin_checked={1}>
                      <span className="counter_icon">
                        <i className="fas fa-users" aria-hidden="true" />
                      </span>
                      <h4 className="counter">950</h4>
                      <p>Happy Patients</p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      animationDuration: "1s",
                      animationName: "fadeInUp"
                    }}
                    bis_skin_checked={1}
                  >
                    <div className="single_counter" bis_skin_checked={1}>
                      <span className="counter_icon icon2">
                        <i className="fas fa-user-md" aria-hidden="true" />
                      </span>
                      <h4 className="counter">256</h4>
                      <p>Expert Doctors</p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      animationDuration: "1s",
                      animationName: "fadeInUp"
                    }}
                    bis_skin_checked={1}
                  >
                    <div className="single_counter" bis_skin_checked={1}>
                      <span className="counter_icon icon3">
                        <i className="fas fa-trophy-alt" aria-hidden="true" ><FaTrophy /></i>
                      </span>
                      <h4 className="counter">90</h4>
                      <p>Award Wining</p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      animationDuration: "1s",
                      animationName: "fadeInUp"
                    }}
                    bis_skin_checked={1}
                  >
                    <div className="single_counter last_counter" bis_skin_checked={1}>
                      <span className="counter_icon icon4">
                        <i className="far fa-stars" aria-hidden="true" ><BsStars /></i>
                      </span>
                      <h4 className="counter">4.9</h4>
                      <p>Average Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div
          className="process pt_100 xs_pt_70 pb_95 xs_pb_65 section-custom-padding"
          style={{ background: `url("${workbg}")` }}
          bis_skin_checked={1}
        >
          <div className="container process_shape" bis_skin_checked={1}>
            <div className="row" bis_skin_checked={1}>
              <Fade down>
                <div className="col-xl-12" bis_skin_checked={1}>
                  <div
                    className="common_heading center_heading mb_25"
                    bis_skin_checked={1}
                  >
                    <h5>How We Work</h5>
                    <h2>Our Working Process</h2>
                  </div>
                </div>
              </Fade>
            </div>
            <Fade up>
              <div className="work_process_area" bis_skin_checked={1}>
                <div className="row" bis_skin_checked={1}>
                  <div
                    className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      animationDuration: "1s",
                      animationName: "none"
                    }}
                    bis_skin_checked={1}
                  >
                    <div className="single_process" bis_skin_checked={1}>
                      <span className="process_number num1">01</span>
                      <h4>fill the form</h4>
                      <p>
                        To book an appointment with an orthopedic doctor in kandivali, please fill out the form on our website with your details.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      animationDuration: "1s",
                      animationName: "none"
                    }}
                    bis_skin_checked={1}
                  >
                    <div className="single_process" bis_skin_checked={1}>
                      <span className="process_number num2">02</span>
                      <h4>Book an Appointment</h4>
                      <p>
                        If you're looking for expert care for your musculoskeletal issues, consider consulting with an orthopedic doctor in Kandivali for specialized and comprehensive treatment.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      animationDuration: "1s",
                      animationName: "none"
                    }}
                    bis_skin_checked={1}
                  >
                    <div className="single_process" bis_skin_checked={1}>
                      <span className="process_number num3">03</span>
                      <h4>Check-Ups</h4>
                      <p>
                        Regular check-ups with an orthopedic doctor in kandivali are crucial for maintaining musculoskeletal health and preventing complications.

                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      animationDuration: "1s",
                      animationName: "none"
                    }}
                    bis_skin_checked={1}
                  >
                    <div className="single_process" bis_skin_checked={1}>
                      <span className="process_number num4">04</span>
                      <h4>Get Reports</h4>
                      <p>
                        For comprehensive insights on orthopedic doctors in Kandivali, check out the detailed reports available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div
          className="helpline pt_100 xs_pt_70 pb_100 xs_pb_70 section-custom-padding"
          bis_skin_checked={1}
        >
          <div className="container" bis_skin_checked={1}>
            <div className="row justify-content-between" bis_skin_checked={1}>
              <Bounce>
                <div
                  className="col-xxl-6 col-lg-6 col-xl-6 wow fadeInLeft"
                  data-wow-duration="1s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationName: "none"
                  }}
                  bis_skin_checked={1}
                >
                  <div className="common_heading" bis_skin_checked={1}>
                    <h5>Emergency helpline</h5>
                    <h2>Need Emergency Contact</h2>
                    <p>
                      In case of an emergency, please contact us immediately at [emergency contact number] for swift assistance. Our team is available 24/7 to address urgent concerns and ensure your safety and well-being.

                    </p>
                  </div>
                  <ul className="helpline_iteam">
                    <li>24/7 Contact Our Hospital.</li>
                    <li>24 hours Open Our Hospital.</li>
                    <li>Emergency Contact Our Phone Number.</li>
                  </ul>
                  <ul className="d-flex flex-wrap helpline_contact">
                    <li>
                      <span>
                        <i className="fas fa-phone-alt" aria-hidden="true" />
                      </span>
                      <div className="helpline_contact_text" bis_skin_checked={1}>
                        <p>Phone Number</p>
                        <a href="callto:123456789" bis_skin_checked={1}>
                          +880 13 2525 065
                        </a>
                      </div>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-comment-alt-lines" aria-hidden="true" ><FaRegMessage /> </i>
                      </span>
                      <div className="helpline_contact_text" bis_skin_checked={1}>
                        <p>Quick Your Email</p>
                        <a href="mailto:example@gmail.com" bis_skin_checked={1}>
                          help.info@gmail.com
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="col-xxl-5 col-lg-6 col-xl-6 wow fadeInRight"
                  data-wow-duration="1s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationName: "none"
                  }}
                  bis_skin_checked={1}
                >
                  <div className="helpline_img" bis_skin_checked={1}>
                    <img
                      src={helpLine}
                      alt="help img"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </Bounce>
            </div>
          </div>
        </div>

      </section>

    </>
  )
}

export default AboutUs