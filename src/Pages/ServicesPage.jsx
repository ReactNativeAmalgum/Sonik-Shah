import ServiceData from "../Asserts/ServiceData";
import { useLocation } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import React from "react";
import { Image, Space } from "antd";
import { GiMedicines } from "react-icons/gi";
import { MetaTags } from "react-meta-tags";

// const src ="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png";

const ServicesPage = () => {
  const serach = useLocation();
  const path = serach.pathname;
  //   console.log(path);
  const getData = ServiceData.find((elm) => elm.slugs === path);
  //   console.log(getData);
  return (
    <>
      <MetaTags>
        <title>{getData.title}</title>
        <meta title={getData.title} />
        <meta name="description" content="Best Orthopedic Surgeon in Kandivali, Orthopedic Doctor in Kandivali, Golden Knee Replacement in Kandivali, Best Trauma Surgeons in Kandivali, Best Orthopedic in Kandivali, Knee Surgeon in kandivali,best shoulder specialist in Kandivali,Hip Surgeon in Kandivali, Partial Knee Replacement in Kandivali, Robotic Knee Replacement Surgeon in Kandivali, Best Arthroscopy Doctors in Kandivali, Ortho Specialist in Kandivali, Orthopedic Care near Kandivali" />
        <link rel="canonical" href="https://drsonikshah.com/" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content={getData.title} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drsonikshah.com/" />
        <meta property="og:description" content={getData.slug_descp} />
        <meta property="og:image" content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png" />
      </MetaTags>
      <Breadcrumb title={getData.ServiceName} />
      <section className="service_details pt_100 xs_pt_70 pb_100 xs_pb_70">
        <div className='head-cont'>
          <h1 className='special-h1'>{getData.keyword}</h1>
        </div>
        <div className="container" bis_skin_checked={1}>

          <div className="my-5">
            <h3 className="fs-1 ">{getData.ServiceName}</h3>
            <div class="devicer "></div>
          </div>
          <div className="row" bis_skin_checked={1}>
            <div
              className="col-xl-12 col-lg-12 mb-sm-3 sm-mb-3 wow fadeInLeft"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInLeft",
              }}
              bis_skin_checked={1}
            >
              <div className="service_dstails_img" bis_skin_checked={1}>
                <span>
                  <i className="fas fa-heartbeat" aria-hidden="true" />
                </span>
                <img
                  src={getData.serviceImg}
                  alt="service"
                  className="img-fluid w-100"
                />
              </div>
              <div className="tf_service_details_text" bis_skin_checked={1}>
                <h3>What is {getData.ServiceName} ?</h3>
                <p>{getData.ServiceDescription}</p>
                <h6>
                  Why {getData.ServiceName} Surgery is done?
                </h6>
                <p>{getData.descp2}</p>
                <h5> What are the benefits of {getData.ServiceName}?</h5>
                <ul>
                  <li>
                    {getData.ben1}
                  </li>
                  <li>
                    {getData.ben2}
                  </li>
                  <li>
                    {getData.ben3}
                  </li>
                  <li>
                    {getData.ben4}
                  </li>
                  <li>
                    {getData.ben5}
                  </li>
                </ul>
                <h6> Who should undergo {getData.ServiceName}?</h6>
                <p>{getData.descp3}</p>
                <h3>Surgery Images</h3>
                <p>{getData.descp4}</p>
              </div>
              <div className="row" bis_skin_checked={1}>
                <div className="col-xl-4 col-sm-6" bis_skin_checked={1}>
                  {/* <a
                    className="service_details_gallery venobox vbox-item"
                    data-gall="gallery01"
                    href="images/service_dtls-3.jpg"
                  > */}
                  <Image
                    width={300}
                    height={200}
                    src={getData.img1}
                    preview={{
                      toolbarRender: (
                        _,
                        {
                          transform: { scale },
                          actions: {
                            onFlipY,
                            onFlipX,
                            onRotateLeft,
                            onRotateRight,
                            onZoomOut,
                            onZoomIn,
                          },
                        }
                      ) => (
                        <Space size={12} className="toolbar-wrapper">
                          {/* <DownloadOutlined onClick={onDownload} /> */}
                          <SwapOutlined rotate={90} onClick={onFlipY} />
                          <SwapOutlined onClick={onFlipX} />
                          <RotateLeftOutlined onClick={onRotateLeft} />
                          <RotateRightOutlined onClick={onRotateRight} />
                          <ZoomOutOutlined
                            disabled={scale === 1}
                            onClick={onZoomOut}
                          />
                          <ZoomInOutlined
                            disabled={scale === 50}
                            onClick={onZoomIn}
                          />
                        </Space>
                      ),
                    }}
                  />
                  {/* <div className="overlay" bis_skin_checked={1}>
                    <i className="fal fa-plus" aria-hidden="true" />
                  </div> */}
                  {/* </a> */}
                </div>
                <div className="col-xl-4 col-sm-6" bis_skin_checked={1}>
                  {/* <a
                    className="service_details_gallery venobox vbox-item"
                    data-gall="gallery01"
                    href="images/service_dtls-4.jpg"
                  > */}
                  <Image
                    width={300}
                    height={200}
                    src={getData.img2}
                    preview={{
                      toolbarRender: (
                        _,
                        {
                          transform: { scale },
                          actions: {
                            onFlipY,
                            onFlipX,
                            onRotateLeft,
                            onRotateRight,
                            onZoomOut,
                            onZoomIn,
                          },
                        }
                      ) => (
                        <Space size={12} className="toolbar-wrapper">
                          {/* <DownloadOutlined onClick={onDownload} /> */}
                          <SwapOutlined rotate={90} onClick={onFlipY} />
                          <SwapOutlined onClick={onFlipX} />
                          <RotateLeftOutlined onClick={onRotateLeft} />
                          <RotateRightOutlined onClick={onRotateRight} />
                          <ZoomOutOutlined
                            disabled={scale === 1}
                            onClick={onZoomOut}
                          />
                          <ZoomInOutlined
                            disabled={scale === 50}
                            onClick={onZoomIn}
                          />
                        </Space>
                      ),
                    }}
                  />
                  {/* <div className="overlay" bis_skin_checked={1}>
                    <i className="fal fa-plus" aria-hidden="true" />
                  </div> */}
                  {/* </a> */}
                </div>
                <div className="col-xl-4 col-sm-6" bis_skin_checked={1}>
                  {/* <a
                    className="service_details_gallery venobox vbox-item"
                    data-gall="gallery01"
                    href="images/service_dtls-5.jpg"
                  > */}
                  <Image
                    width={300}
                    height={200}
                    src={getData.img3}
                    preview={{
                      toolbarRender: (
                        _,
                        {
                          transform: { scale },
                          actions: {
                            onFlipY,
                            onFlipX,
                            onRotateLeft,
                            onRotateRight,
                            onZoomOut,
                            onZoomIn,
                          },
                        }
                      ) => (
                        <Space size={12} className="toolbar-wrapper">
                          {/* <DownloadOutlined onClick={onDownload} /> */}
                          <SwapOutlined rotate={90} onClick={onFlipY} />
                          <SwapOutlined onClick={onFlipX} />
                          <RotateLeftOutlined onClick={onRotateLeft} />
                          <RotateRightOutlined onClick={onRotateRight} />
                          <ZoomOutOutlined
                            disabled={scale === 1}
                            onClick={onZoomOut}
                          />
                          <ZoomInOutlined
                            disabled={scale === 50}
                            onClick={onZoomIn}
                          />
                        </Space>
                      ),
                    }}
                  />
                  {/* <div className="overlay" bis_skin_checked={1}>
                    <i className="fal fa-plus" aria-hidden="true" />
                  </div> */}
                  {/* </a> */}
                </div>
              </div>
              <div className="row mt-5 mb-5 shadow" bis_skin_checked={1}>
                <div className="col-xl-4 col-sm-6" bis_skin_checked={1}>
                  <div className="tf_service_dtls_process" bis_skin_checked={1}>
                    <i className="fas fa-eye" aria-hidden="true" />
                    <h5>Appointment</h5>
                    <p>
                      Please schedule an appointment through our website for your convenience.

                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6" bis_skin_checked={1}>
                  <div className="tf_service_dtls_process" bis_skin_checked={1}>
                    <i className="fas fa-heartbeat" aria-hidden="true" />
                    <h5>Instant Checkup</h5>
                    <p>
                      Instant Checkup: Get quick, reliable health assessments online, tailored to your needs
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6" bis_skin_checked={1}>
                  <div className="tf_service_dtls_process" bis_skin_checked={1}>
                    <i className="fad fa"><GiMedicines /></i>
                    <h5>Get Report</h5>
                    <p>
                      Access comprehensive insights and analysis with our detailed 'Get Report' feature.

                    </p>
                  </div>
                </div>
              </div>
              {/* <ul className="tf_service_pdf_link pt_25">
                <li>
                  <a href="#">
                    <i className="fas fa-file-pdf" aria-hidden="true" />
                    Download on
                    <span>PDF</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-file-word" aria-hidden="true" />
                    Download on
                    <span>Doc</span>
                  </a>
                </li>
              </ul> */}
              {/* <div className="comment_area" bis_skin_checked={1}>
          <h2>Total Review (04)</h2>
          <div className="single_comment" bis_skin_checked={1}>
            <div className="comment_img" bis_skin_checked={1}>
              <img
                src="images/comment-1.png"
                alt="review"
                className="img-fluid w-100"
              />
            </div>
            <div className="comment_text" bis_skin_checked={1}>
              <h4>
                Robert Smith{" "}
                <span>
                  <i className="fal fa-clock" aria-hidden="true" />4 hour ago
                </span>
              </h4>
              <span className="rating">
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
              </span>
              <p>
                But the majority have suffered alteration in some form, by
                injected humour, or randomi sed its wordsn look even slightly
                believable.
              </p>
              <a href="#">
                <i className="fal fa-reply-all" aria-hidden="true" />
                reply
              </a>
            </div>
          </div>
          <div className="single_comment commant_reply" bis_skin_checked={1}>
            <div className="comment_img" bis_skin_checked={1}>
              <img
                src="images/comment-2.png"
                alt="review"
                className="img-fluid w-100"
              />
            </div>
            <div className="comment_text" bis_skin_checked={1}>
              <h4>
                Steven Smith{" "}
                <span>
                  <i className="fal fa-clock" aria-hidden="true" />1 hour ago
                </span>
              </h4>
              <span className="rating">
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
              </span>
              <p>
                But the majority have suffered alteration in some form, by
                injected humour, or randomi sed its wordsn look even slightly
                believable.
              </p>
              <a href="#">
                <i className="fal fa-reply-all" aria-hidden="true" />
                reply
              </a>
            </div>
          </div>
          <div className="single_comment" bis_skin_checked={1}>
            <div className="comment_img" bis_skin_checked={1}>
              <img
                src="images/comment-3.png"
                alt="review"
                className="img-fluid w-100"
              />
            </div>
            <div className="comment_text" bis_skin_checked={1}>
              <h4>
                Deni Rover
                <span>
                  <i className="fal fa-clock" aria-hidden="true" /> 6 hour ago
                </span>
              </h4>
              <span className="rating">
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
              </span>
              <p>
                But the majority have suffered alteration in some form, by
                injected humour, or randomi sed its wordsn look even slightly
                believable.
              </p>
              <a href="#">
                <i className="fal fa-reply-all" aria-hidden="true" />
                reply
              </a>
            </div>
          </div>
          <div className="single_comment" bis_skin_checked={1}>
            <div className="comment_img" bis_skin_checked={1}>
              <img
                src="images/comment-1.png"
                alt="review"
                className="img-fluid w-100"
              />
            </div>
            <div className="comment_text" bis_skin_checked={1}>
              <h4>
                Robert Smith{" "}
                <span>
                  <i className="fal fa-clock" aria-hidden="true" />4 hour ago
                </span>
              </h4>
              <span className="rating">
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
              </span>
              <p>
                But the majority have suffered alteration in some form, by
                injected humour, or randomi sed its wordsn look even slightly
                believable.
              </p>
              <a href="#">
                <i className="fal fa-reply-all" aria-hidden="true" />
                reply
              </a>
            </div>
          </div>
        </div>
        <form className="comment_input_area">
          <h2>Leave a Review</h2>
          <p>
            <i className="fas fa-star" aria-hidden="true" />
            <i className="fas fa-star" aria-hidden="true" />
            <i className="fas fa-star" aria-hidden="true" />
            <i className="fas fa-star" aria-hidden="true" />
            <i className="fas fa-star" aria-hidden="true" />
          </p>
          <div className="row" bis_skin_checked={1}>
            <div className="col-xl-6" bis_skin_checked={1}>
              <input type="text" placeholder="Name..." />
            </div>
            <div className="col-xl-6" bis_skin_checked={1}>
              <input type="text" placeholder="Email..." />
            </div>
            <div className="col-xl-12 mt-4 mb-4" bis_skin_checked={1}>
              <textarea
                rows={4}
                placeholder="Write A Comment..."
                defaultValue={""}
              />
            </div>
            <div className="col-xl-12" bis_skin_checked={1}>
              <a href="#" className="common_btn">
                Submit Now
              </a>
            </div>
          </div>
        </form> */}
            </div>
            {/* <div
        className="col-xl-3 col-lg-4 wow fadeInRight"
        data-wow-duration="1s"
        style={{
          position: "relative",
          visibility: "visible",
          animationDuration: "1s",
          animationName: "fadeInRight"
        }}
        bis_skin_checked={1}
      >
        <div
          id="sticky_sidebar"
          style={{ willChange: "transform", transform: "translateZ(0px)" }}
          bis_skin_checked={1}
          className=""
        >
          <div className="service_dtls_rightside" bis_skin_checked={1}>
            <h4>Search</h4>
            <form action="#" className="blog_form">
              <input type="text" placeholder="Search..." />
              <button className="_blog_btn">
                <i className="fas fa-search" aria-hidden="true" />
              </button>
            </form>
          </div>
          <div className="service_dtls_rightside" bis_skin_checked={1}>
            <h5>Categories</h5>
            <ul className="sidebar_category">
              <li>
                <a href="#">Urology</a>
              </li>
              <li>
                <a href="#">Gynecologist</a>
              </li>
              <li>
                <a href="#">Medicine</a>
              </li>
              <li>
                <a href="#">Child Care</a>
              </li>
              <li>
                <a href="#">Covid Test</a>
              </li>
              <li>
                <a href="#">Dentist</a>
              </li>
            </ul>
          </div>
          <div className="service_dtls_rightside" bis_skin_checked={1}>
            <h5>Recent Post</h5>
            <ul className="sidebar_post">
              <li>
                <div className="recent_post_img" bis_skin_checked={1}>
                  <img
                    src="images/blog_dtls-2.jpg"
                    alt="post"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="recent_post_text" bis_skin_checked={1}>
                  <p>
                    <i className="fas fa-calendar-alt" aria-hidden="true" />
                    22 June 2023
                  </p>
                  <a href="#">Precious Tips To Help You Get Better.</a>
                </div>
              </li>
              <li>
                <div className="recent_post_img" bis_skin_checked={1}>
                  <img
                    src="images/blog_dtls-3.jpg"
                    alt="post"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="recent_post_text" bis_skin_checked={1}>
                  <p>
                    <i className="fas fa-calendar-alt" aria-hidden="true" />
                    22 June 2023
                  </p>
                  <a href="#">Precious Tips To Help You Get Better.</a>
                </div>
              </li>
              <li>
                <div className="recent_post_img" bis_skin_checked={1}>
                  <img
                    src="images/blog_dtls-4.jpg"
                    alt="post"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="recent_post_text" bis_skin_checked={1}>
                  <p>
                    <i className="fas fa-calendar-alt" aria-hidden="true" />
                    22 June 2023
                  </p>
                  <a href="#">Precious Tips To Help You Get Better.</a>
                </div>
              </li>
            </ul>
          </div>
          <div
            className="service_dtls_rightside sidebar_tags"
            bis_skin_checked={1}
          >
            <h5>Post Tags</h5>
            <ul className="d-flex flex-wrap">
              <li>
                <a href="#">Appointment</a>
              </li>
              <li>
                <a href="#">Doctors</a>
              </li>
              <li>
                <a href="#">Importance</a>
              </li>
              <li>
                <a href="#">Health</a>
              </li>
              <li>
                <a href="#">Best</a>
              </li>
              <li>
                <a href="#">Hospital</a>
              </li>
              <li>
                <a href="#">Laboratory</a>
              </li>
              <li>
                <a href="#">Antibiotics</a>
              </li>
              <li>
                <a href="#">Doctors</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="sticky_sidebar"
          className="jquery-stickit-spacer"
          style={{
            height: "1429.19px",
            visibility: "hidden !important",
            display: "none !important"
          }}
          bis_skin_checked={1}
        />
      </div> */}
          </div>
        </div>
      </section>
      <section className="appoinment pt_185 xs_pt_70 pb_100 xs_pb_70 mt-5 mb-5">
        <div className="container" bis_skin_checked={1}>
          <div
            className="appoinment_bg"
            style={{ backgroundImage: "url(https://html.themefax.com/madifax/images/appointment_bg.jpg)" }}
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
                          <div className="appoinment_form_input" bis_skin_checked={1}>
                            <input type="text" placeholder="Patient Name*" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                          <div className="appoinment_form_input" bis_skin_checked={1}>
                            <input type="email" placeholder="Email*" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                          <div className="appoinment_form_input" bis_skin_checked={1}>
                            <input type="email" placeholder="Email Address*" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                          <div className="appoinment_form_input" bis_skin_checked={1}>
                            <select
                              className="select_2 select2-hidden-accessible"
                              data-select2-id="select2-data-1-ayd1"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option value="" data-select2-id="select2-data-3-oein">
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
                              data-select2-id="select2-data-2-gro6"
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
                                  aria-labelledby="select2-owyu-container"
                                  aria-controls="select2-owyu-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-owyu-container"
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
                              <span className="dropdown-wrapper" aria-hidden="true" />
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                          <div className="appoinment_form_input" bis_skin_checked={1}>
                            <select
                              className="select_2 select2-hidden-accessible"
                              data-select2-id="select2-data-4-jf4z"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option value="" data-select2-id="select2-data-6-uz8t">
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
                              data-select2-id="select2-data-5-s9fz"
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
                                  aria-labelledby="select2-497n-container"
                                  aria-controls="select2-497n-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-497n-container"
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
                              <span className="dropdown-wrapper" aria-hidden="true" />
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                          <div className="appoinment_form_input" bis_skin_checked={1}>
                            <input type="date" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                          <div className="appoinment_form_input" bis_skin_checked={1}>
                            <select
                              className="reservation_input select_2 select2-hidden-accessible"
                              data-select2-id="select2-data-7-hwf6"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option value="" data-select2-id="select2-data-9-2cdc">
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
                              data-select2-id="select2-data-8-y1pe"
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
                                  aria-labelledby="select2-pg2y-container"
                                  aria-controls="select2-pg2y-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-pg2y-container"
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
                              <span className="dropdown-wrapper" aria-hidden="true" />
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                          <div className="appoinment_form_input" bis_skin_checked={1}>
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
                      src="https://html.themefax.com/madifax/images/appoinment_img.png"
                      alt="appointment"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ServicesPage;
