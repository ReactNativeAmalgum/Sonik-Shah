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

const AboutUs = () => {
  return (
    <>
      <Breadcrumb />
      <section className="about_page">
        {/* <div className="about pt_100 xs_pt_70 pb_100 xs_pb_70" bis_skin_checked={1}>
    <div className="container" bis_skin_checked={1}>
      <div className="row" bis_skin_checked={1}>
        <div
          className="col-xl-6 col-sm-9  col-lg-5 col-md-7 wow fadeInLeft"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "fadeInLeft"
          }}
          bis_skin_checked={1}
        >
          <div className="about_img" bis_skin_checked={1}>
            <div className="about_img_1" bis_skin_checked={1}>
              <img
                src="images/about-img1.jpg"
                alt="about img"
                className="img-fluid w-100"
              />
            </div>
            <div className="about_img_2" bis_skin_checked={1}>
              <img
                src="images/about_img2.jpg"
                alt="about img"
                className="img-fluid w-100"
              />
              <a
                className="play_btn venobox vbox-item"
                data-autoplay="true"
                data-vbtype="video"
                href="https://youtu.be/nqye02H_H6I"
                bis_skin_checked={1}
              >
                <i className="fas fa-play" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-6 col-sm-12 col-lg-7  wow fadeInRight"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "fadeInRight"
          }}
          bis_skin_checked={1}
        >
          <div className="common_heading" bis_skin_checked={1}>
            <h5>about us</h5>
            <h2>The Great Place of Medical Hospital Center.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum susp endisse ultrices gravida tempor incididu ut labore et
              dolore magna aliqua. Quis ipsum susp endisse ultrices gravida.
            </p>
          </div>
          <ul className="about_iteam d-flex flex-wrap">
            <li>Ambulance Services</li>
            <li>Oxizen on Wheel</li>
            <li>Pharmacy on Clinic</li>
            <li>On duty Doctors</li>
            <li>24/7 Medical Emergency</li>
          </ul>
          <a href="about.html" className="common_btn" bis_skin_checked={1}>
            Discover More
          </a>
        </div>
      </div>
    </div>
  </div> */}
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
                      <img
                        src="https://html.themefax.com/madifax/images/about-img1.jpg"
                        alt="about img"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="about_img_2">
                      <img
                        src="https://drsonikshah.com/assets/img/sonik.jpg"
                        alt="about img"
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
                    <span className='qualification'> M.S.( ORTHO) MUMBAI <br /> Consultant Orthopedic surgeon Joint replacement,Arthroscopy & sports medicine</span> <br />
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
        {/* <div
    className="appoinment pt_185 xs_pt_70 pb_100 xs_pb_70"
    bis_skin_checked={1}
  >
    <div className="container" bis_skin_checked={1}>
      <div
        className="appoinment_bg"
        style={{ background: "url(images/appointment_bg.jpg)" }}
        bis_skin_checked={1}
      >
        <div className="appoinment_overlay" bis_skin_checked={1}>
          <div className="row" bis_skin_checked={1}>
            <div
              className="col-xl-7 col-lg-7 wow fadeInLeft"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInLeft"
              }}
              bis_skin_checked={1}
            >
              <div className="appoinment_form" bis_skin_checked={1}>
                <div className="common_heading mb_30" bis_skin_checked={1}>
                  <h5>Appointment</h5>
                  <h2>Apply For Free Now</h2>
                </div>
                <form action="#">
                  <div className="row" bis_skin_checked={1}>
                    <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                      <div
                        className="appoinment_form_input"
                        bis_skin_checked={1}
                      >
                        <input type="text" placeholder="Patient Name*" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                      <div
                        className="appoinment_form_input"
                        bis_skin_checked={1}
                      >
                        <input type="email" placeholder="Email*" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                      <div
                        className="appoinment_form_input"
                        bis_skin_checked={1}
                      >
                        <input type="email" placeholder="Email Address*" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                      <div
                        className="appoinment_form_input"
                        bis_skin_checked={1}
                      >
                        <select
                          className="select_2 select2-hidden-accessible"
                          data-select2-id="select2-data-1-57i3"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option
                            value=""
                            data-select2-id="select2-data-3-yksa"
                          >
                            Select Department
                          </option>
                          <option value="">Cardiology</option>
                          <option value="">Ophthalmology</option>
                          <option value="">Pediatric</option>
                          <option value="">Radiology</option>
                          <option value="">Urology</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-2-9axq"
                          style={{ width: 203 }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-stb5-container"
                              aria-controls="select2-stb5-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-stb5-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Select Department"
                              >
                                Select Department
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                      <div
                        className="appoinment_form_input"
                        bis_skin_checked={1}
                      >
                        <select
                          className="select_2 select2-hidden-accessible"
                          data-select2-id="select2-data-4-4qhc"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option
                            value=""
                            data-select2-id="select2-data-6-adgc"
                          >
                            Select Doctor
                          </option>
                          <option value="">Dr. Hasan Mahamud</option>
                          <option value="">Dr. Moinuddin</option>
                          <option value="">Dr. Afroja Akter</option>
                          <option value="">Dr. Mamunur Rasid</option>
                          <option value="">Dr. Abdus Salam</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-5-gubb"
                          style={{ width: 210 }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-b4a9-container"
                              aria-controls="select2-b4a9-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-b4a9-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Select Doctor"
                              >
                                Select Doctor
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                      <div
                        className="appoinment_form_input"
                        bis_skin_checked={1}
                      >
                        <input type="date" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                      <div
                        className="appoinment_form_input"
                        bis_skin_checked={1}
                      >
                        <select
                          className="reservation_input select_2 select2-hidden-accessible"
                          data-select2-id="select2-data-7-auq8"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option
                            value=""
                            data-select2-id="select2-data-9-2ivd"
                          >
                            Select Time
                          </option>
                          <option value="">10.00 am to 11.00 am</option>
                          <option value="">11.00 am to 12.00 pm</option>
                          <option value="">3.00 pm to 4.00 pm</option>
                          <option value="">4.00 pm to 5.00 pm</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-8-h1ar"
                          style={{ width: 215 }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-soho-container"
                              aria-controls="select2-soho-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-soho-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Select Time"
                              >
                                Select Time
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                      <div
                        className="appoinment_form_input"
                        bis_skin_checked={1}
                      >
                        <button className="common_btn">book appoinment</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-4" bis_skin_checked={1}>
              <div className="appoinment_img" bis_skin_checked={1}>
                <img
                  src="images/appoinment_img.png"
                  alt="appointment"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
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
        {/* <div className="team pt_100 xs_pt_70 pb_100 xs_pb_70" bis_skin_checked={1}>
    <div className="container" bis_skin_checked={1}>
      <div className="row" bis_skin_checked={1}>
        <div className="col-xl-12" bis_skin_checked={1}>
          <div
            className="common_heading center_heading mb_25"
            bis_skin_checked={1}
          >
            <h5>our team</h5>
            <h2>Meet Our expert doctor</h2>
          </div>
        </div>
      </div>
      <div className="row" bis_skin_checked={1}>
        <div
          className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "none"
          }}
          bis_skin_checked={1}
        >
          <div className="single_team" bis_skin_checked={1}>
            <div className="team_img" bis_skin_checked={1}>
              <img
                src="images/team-1.jpg"
                alt="team"
                className="img-fluid w-100"
              />
              <div className="team_overlay" bis_skin_checked={1}>
                <ul className="team_icon">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-whatsapp" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team_designation" bis_skin_checked={1}>
              <h6>Dr. Jon Miller</h6>
              <p>Neurology</p>
              <span>MBBS, FCPS, FRCS</span>
              <a href="doctor_details.html" bis_skin_checked={1}>
                <i className="fal fa-plus" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "none"
          }}
          bis_skin_checked={1}
        >
          <div className="single_team" bis_skin_checked={1}>
            <div className="team_img" bis_skin_checked={1}>
              <img
                src="images/team-2.jpg"
                alt="team"
                className="img-fluid w-100"
              />
              <div className="team_overlay" bis_skin_checked={1}>
                <ul className="team_icon">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-whatsapp" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team_designation" bis_skin_checked={1}>
              <h6>Dr. Jon Miller</h6>
              <p>Cardiology</p>
              <span>MBBS, FCPS, FRCS</span>
              <a href="doctor_details.html" bis_skin_checked={1}>
                <i className="fal fa-plus" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "none"
          }}
          bis_skin_checked={1}
        >
          <div className="single_team" bis_skin_checked={1}>
            <div className="team_img" bis_skin_checked={1}>
              <img
                src="images/team-3.jpg"
                alt="team"
                className="img-fluid w-100"
              />
              <div className="team_overlay" bis_skin_checked={1}>
                <ul className="team_icon">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-whatsapp" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team_designation" bis_skin_checked={1}>
              <h6>Dr. Jon Miller</h6>
              <p>Ophthalmology</p>
              <span>MBBS, FCPS, FRCS</span>
              <a href="doctor_details.html" bis_skin_checked={1}>
                <i className="fal fa-plus" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "none"
          }}
          bis_skin_checked={1}
        >
          <div className="single_team" bis_skin_checked={1}>
            <div className="team_img" bis_skin_checked={1}>
              <img
                src="images/team-4.jpg"
                alt="team"
                className="img-fluid w-100"
              />
              <div className="team_overlay" bis_skin_checked={1}>
                <ul className="team_icon">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-whatsapp" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team_designation" bis_skin_checked={1}>
              <h6>Dr. Jon Miller</h6>
              <p>Pediatric</p>
              <span>MBBS, FCPS, FRCS</span>
              <a href="doctor_details.html" bis_skin_checked={1}>
                <i className="fal fa-plus" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 text-center mt_40" bis_skin_checked={1}>
          <a className="common_btn" href="doctor.html" bis_skin_checked={1}>
            view more
          </a>
        </div>
      </div>
    </div>
  </div> */}
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
        {/* <div className="blog pt_100 xs_pt_70 pb_100 xs_pb_70" bis_skin_checked={1}>
    <div className="container" bis_skin_checked={1}>
      <div className="row" bis_skin_checked={1}>
        <div className="col-xl-12" bis_skin_checked={1}>
          <div
            className="common_heading center_heading mb_15"
            bis_skin_checked={1}
          >
            <h5>Latest News</h5>
            <h2>Latest Post &amp; Articles</h2>
          </div>
        </div>
      </div>
      <div className="row" bis_skin_checked={1}>
        <div
          className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "none"
          }}
          bis_skin_checked={1}
        >
          <div className="single_blog" bis_skin_checked={1}>
            <div className="blog_img" bis_skin_checked={1}>
              <a href="#" className="category">
                Medical
              </a>
              <img
                src="images/blog-1.jpg"
                alt="blog img"
                className=" img-fluid w-100"
              />
            </div>
            <div className="blog_text" bis_skin_checked={1}>
              <ul className="d-flex flex-wrap blog_date">
                <li>
                  <i className="fas fa-user" aria-hidden="true" />
                  Admin
                </li>
                <li>
                  <i className="fas fa-calendar-alt" aria-hidden="true" />
                  22 june 2023
                </li>
              </ul>
              <a
                href="blog_details.html"
                className="blog_heading"
                bis_skin_checked={1}
              >
                Telehealth Services Are Ready To Help Your Family
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing. Veritatis
                consectetur ipsum.
              </p>
              <div className="blog_text_icon" bis_skin_checked={1}>
                <a
                  className="blog_link"
                  href="blog_details.html"
                  bis_skin_checked={1}
                >
                  read more{" "}
                  <i className="far fa-long-arrow-right" aria-hidden="true" />
                </a>
                <ul className="d-flex flex-wrap blog_react">
                  <li>
                    <i className="fas fa-comment-lines" aria-hidden="true" />5
                  </li>
                  <li>
                    <i className="fas fa-heart" aria-hidden="true" />
                    20
                  </li>
                  <li>
                    <i className="fas fa-share-alt" aria-hidden="true" />
                    15
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "none"
          }}
          bis_skin_checked={1}
        >
          <div className="single_blog" bis_skin_checked={1}>
            <div className="blog_img" bis_skin_checked={1}>
              <a href="#" className="category blue">
                Hospital
              </a>
              <img
                src="images/blog-2.jpg"
                alt="blog img"
                className=" img-fluid w-100"
              />
            </div>
            <div className="blog_text" bis_skin_checked={1}>
              <ul className="d-flex flex-wrap blog_date">
                <li>
                  <i className="fas fa-user" aria-hidden="true" />
                  Admin
                </li>
                <li>
                  <i className="fas fa-calendar-alt" aria-hidden="true" />
                  22 june 2023
                </li>
              </ul>
              <a
                href="blog_details.html"
                className="blog_heading"
                bis_skin_checked={1}
              >
                Doccure – Making your clinic painless visit
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing. Veritatis
                consectetur amet.
              </p>
              <div className="blog_text_icon" bis_skin_checked={1}>
                <a
                  className="blog_link"
                  href="blog_details.html"
                  bis_skin_checked={1}
                >
                  read more{" "}
                  <i className="far fa-long-arrow-right" aria-hidden="true" />
                </a>
                <ul className="d-flex flex-wrap blog_react">
                  <li>
                    <i className="fas fa-comment-lines" aria-hidden="true" />5
                  </li>
                  <li>
                    <i className="fas fa-heart" aria-hidden="true" />
                    20
                  </li>
                  <li>
                    <i className="fas fa-share-alt" aria-hidden="true" />
                    15
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "none"
          }}
          bis_skin_checked={1}
        >
          <div className="single_blog" bis_skin_checked={1}>
            <div className="blog_img" bis_skin_checked={1}>
              <a href="#" className="category red">
                Doctor
              </a>
              <img
                src="images/blog-3.jpg"
                alt="blog img"
                className=" img-fluid w-100"
              />
            </div>
            <div className="blog_text" bis_skin_checked={1}>
              <ul className="d-flex flex-wrap blog_date">
                <li>
                  <i className="fas fa-user" aria-hidden="true" />
                  Admin
                </li>
                <li>
                  <i className="fas fa-calendar-alt" aria-hidden="true" />
                  22 june 2023
                </li>
              </ul>
              <a
                href="blog_details.html"
                className="blog_heading"
                bis_skin_checked={1}
              >
                What are the benefits of Online Doctor Booking
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing. Veritatis
                consectetur.
              </p>
              <div className="blog_text_icon" bis_skin_checked={1}>
                <a
                  className="blog_link"
                  href="blog_details.html"
                  bis_skin_checked={1}
                >
                  read more{" "}
                  <i className="far fa-long-arrow-right" aria-hidden="true" />
                </a>
                <ul className="d-flex flex-wrap blog_react">
                  <li>
                    <i className="fas fa-comment-lines" aria-hidden="true" />5
                  </li>
                  <li>
                    <i className="fas fa-heart" aria-hidden="true" />
                    20
                  </li>
                  <li>
                    <i className="fas fa-share-alt" aria-hidden="true" />
                    15
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
      </section>

    </>
  )
}

export default AboutUs