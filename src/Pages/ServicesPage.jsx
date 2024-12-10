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
import React, { useState } from "react";
import { Image, Space } from "antd";
import { GiMedicines } from "react-icons/gi";
import { MetaTags } from "react-meta-tags";
import serviceData from "../Asserts/ServiceData";
import $ from "jquery";
import galleryData from "../Asserts/galleryData";

const ServicesPage = () => {
  const serach = useLocation();
  const path = serach.pathname;
  //   console.log(path);
  const getData = ServiceData.find((elm) => elm.slugs === path);
  const [formData, setFormData] = React.useState({
    patientName: "",
    email: "",
    department: "",
    date: "",
    time: "",
    phoneNumber: ''
  });

  const Appointment = (formData) => {
    const body = `
      <!DOCTYPE html>
      <html> 
        <head> 
          <title>Dr Sonik B Shah</title> 
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
          <meta name="viewport" content="width=device-width,initial-scale=1"> 
          <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
        </head> 
        <body style="margin:0!important;padding:0!important;background-color:#eee" bgcolor="#eeeeee">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#fff">
            <tr>
              <td align="center" style="background-color:#eee" bgcolor="#eeeeee">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px">
                  <tr>
                    <td align="center" valign="top" style="font-size:0;padding:10px" bgcolor="#FFD44C">
                      <a href="tel:+91 986745454" style="text-decoration:none;color:#000;font-size:16px">Lead generated for Dr Sonik Shah</a>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" style="font-size:0;padding:15px" bgcolor="#fff">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:36px;font-weight:800;line-height:48px">
                            <img style="width:100%;height:120px" src="https://justmirrorsalon.in/static/media/JMS.7493f202fc387288d7c0.png" alt="Logo">
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;padding:10px 0">
                            <h1 style="font-size:14px;font-weight:500;margin:0;text-align:center;color:#000">Client Enquiry Details</h1>
                          </td>
                        </tr>
                        <tr>
                          <td width="100%" align="center" style="padding:0 35px 35px 35px">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px">
                              <tr>
                                <td width="50%" align="left" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px">
                                  <p style="font-size:16px;font-weight:600;color:#0074be">Customer First Name:</p>
                                  <p style="font-size:14px;font-weight:500;color:#111">${formData.patientName}</p>
                                </td>
                                <td width="50%" align="left" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px">
                                  <p style="font-size:16px;font-weight:600;color:#0074be">Customer Email:</p>
                                  <p style="font-size:14px;font-weight:500;color:#111">${formData.email}</p>
                                </td>
                              </tr>
                              <tr>
                                <td width="50%" align="left" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px">
                                  <p style="font-size:16px;font-weight:600;color:#0074be">Enquiry Department</p>
                                  <p style="font-size:14px;font-weight:500;color:#111">${formData.department}</p>
                                </td>
                                <td width="50%" align="left" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px">
                                  <p style="font-size:16px;font-weight:600;color:#0074be">Customer Phone Number:</p>
                                  <p style="font-size:14px;font-weight:500;color:#111">${formData.phoneNumber}</p>
                                </td>
                              </tr>
                              <tr>
                                <td width="50%" align="left" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px">
                                  <p style="font-size:16px;font-weight:600;color:#0074be">Enquiry Date:</p>
                                  <p style="font-size:14px;font-weight:500;color:#111">${formData.date}</p>
                                </td>
                                <td width="50%" align="left" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px">
                                  <p style="font-size:16px;font-weight:600;color:#0074be">Enquiry Time:</p>
                                  <p style="font-size:14px;font-weight:500;color:#111">${formData.time}</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td width="100%" align="center" bgcolor="#FFD44C" style="padding:10px 0">
                            <p style="color:#000;font-weight:500;font-size:1rem;padding:0;margin:0">Dr Sonik Shah</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    return fetch("https://skdm.in/server/v1/send_lead_mail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        toEmail: "Shah.sonik@gmail.com",
        fromEmail: "skdmlead@gmail.com",
        bccMail: "skdmlead@gmail.com",
        mailSubject: "New Customer Lead",
        mailBody: body,
        accountName: "Just Mirror Saloon",
        accountLeadSource: "https://drsonikshah.com/",
        accountLeadName: formData.patientName
      })
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Appointment(formData);
      if (response.ok) {
        alert("Your Form has been submitted. Our team will contact you soon.");
      } else {
        alert("There was an issue submitting your form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

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
      <section className="service_details pt_100 xs_pt_70 pb_100 xs_pb_70 custom-cont">
        <div className='head-cont'>
          <h1 className='special-h1'>{getData.keyword}</h1>
        </div>
        <div className="container" bis_skin_checked={1}>

          {/* <div className="my-5">
            <h3 className="fs-1 ">{getData.ServiceName}</h3>
            <div class="devicer "></div>
          </div> */}
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
                  alt={getData.keyword}
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
                  
                  <Image
                    width={300}
                    height={200}
                    src={getData.img1}
                    alt={getData.keyword}
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

                </div>
                <div className="col-xl-4 col-sm-6" bis_skin_checked={1}>

                  <Image
                    width={300}
                    height={200}
                    src={getData.img2}
                    alt={getData.keyword}
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

                </div>
                <div className="col-xl-4 col-sm-6" bis_skin_checked={1}>

                  <Image
                    width={300}
                    height={200}
                    src={getData.img3}
                    alt={getData.keyword}
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


            </div>

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
              <div style={{ display: 'flex', flexDirection: 'row', gap:'50px' }} className="row" bis_skin_checked={1}>
                <div
                  className="col-xl-6 col-lg-6 wow fadeInLeft"
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
                    <form onSubmit={handleSubmit}>
                      <div className="row" bis_skin_checked={1}>
                        <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                          <div className="appoinment_form_input" bis_skin_checked={1}>
                            <input
                              type="patientName"
                              placeholder="Patient Name*"
                              name="patientName"
                              value={formData.patientName}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                          <div className="appoinment_form_input" bis_skin_checked={1}>
                            <input
                              type="email"
                              placeholder="Email*"
                              name="email"
                              value={formData.email}
                              onChange={handleChange} />
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                          <div className="appoinment_form_input" bis_skin_checked={1}>
                            <input
                              type="phoneNumber"
                              placeholder="PhoneNumber*"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleChange} />
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                          <div className="appoinment_form_input" bis_skin_checked={1}>
                            <select
                              name="department"
                              style={{ borderRadius: 50, width: '100%' }}
                              value={formData.department}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select Department</option>
                              {serviceData.map((s, i) => (
                                <option key={i} value={s.ServiceName}>
                                  {s.ServiceName}
                                </option>
                              ))}
                            </select>


                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                          <div className="appoinment_form_input" bis_skin_checked={1}>
                            <input type="date"
                              type="date"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="appoinment_form_input">
                            <select
                              name="time"
                              value={formData.time}
                              style={{ borderRadius: 50, width: '100%' }}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select Time</option>
                              <option value="10:00 am to 11:00 am">10:00 am to 11:00 am</option>
                              <option value="11:00 am to 12:00 pm">11:00 am to 12:00 pm</option>
                              <option value="3:00 pm to 4:00 pm">3:00 pm to 4:00 pm</option>
                              <option value="4:00 pm to 5:00 pm">4:00 pm to 5:00 pm</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-lg-12 col-sm-12"
                        >
                          <div className="appoinment_form_input" bis_skin_checked={1}>
                            <button className="common_btn">book appoinment</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 wow fadeInLeft">
                  <img style={{height:'100%', borderRadius:10}} src={galleryData.dr} />
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
