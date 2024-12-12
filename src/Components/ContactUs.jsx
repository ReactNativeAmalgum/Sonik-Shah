import React, { useState } from 'react';
import Breadcrumb from '../Pages/Breadcrumb';
import contactImg from "../Asserts/contact_img.webp";
import Fade from "react-reveal/Fade";
import { MetaTags } from 'react-meta-tags';
import NavBar from './Header';

const ContactUs = () => {
  const [errors, setErrors] = React.useState({});
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    service: '',
    message: ''
  });

  const Appointment = async (formData) => {
    const body = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Dr Sonik B Shah</title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width,initial-scale=1">
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
                            <img style="width:100%;height:120px" src="http://localhost:3000/static/media/logo.8d8cd9d98148e6b3c5cc.png" alt="Logo">
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
                                  <p style="font-size:14px;font-weight:500;color:#111">${formData.fullName}</p>
                                </td>
                                <td width="50%" align="left" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px">
                                  <p style="font-size:16px;font-weight:600;color:#0074be">Customer Email:</p>
                                  <p style="font-size:14px;font-weight:500;color:#111">${formData.email}</p>
                                </td>
                              </tr>
                              <tr>
                                <td width="50%" align="left" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px">
                                  <p style="font-size:16px;font-weight:600;color:#0074be">Subject:</p>
                                  <p style="font-size:14px;font-weight:500;color:#111">${formData.subject}</p>
                                </td>
                                <td width="50%" align="left" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px">
                                  <p style="font-size:16px;font-weight:600;color:#0074be">Customer Phone Number:</p>
                                  <p style="font-size:14px;font-weight:500;color:#111">${formData.phoneNumber}</p>
                                </td>
                              </tr>
                              <tr>
                                <td width="50%" align="left" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px">
                                  <p style="font-size:16px;font-weight:600;color:#0074be">Message:</p>
                                  <p style="font-size:14px;font-weight:500;color:#111">${formData.message}</p>
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
          accountLeadName: formData.fullName,
        })
        
      });
      
  };
  // Handle form field change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Basic form validation
  const validateForm = () => {
    let formErrors = {};
    if (!formData.fullName) formErrors.fullName = 'Full Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.phoneNumber) formErrors.phoneNumber = 'Phone Number is required';
    if (!formData.subject) formErrors.subject = 'Subject is required';
    if (!formData.service) formErrors.service = 'Service is required';
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      const response = await Appointment(formData);
      if (response.ok) {
        alert("Your Form has been submitted. Our team will contact you soon.");
      } else {
        alert("There was an issue submitting your form. Please try again later.");
      }
    } catch (error) {
      alert("There was an issue submitting your form. Please try again later.");
    }
  }

    return (
      <>
        <MetaTags>
          <title>Orthopedic Care near Kandivali | Sonik Shah</title>
          <meta title="Orthopedic Care near Kandivali | Sonik Shah" />
          <meta name="description" content="Best Orthopedic Surgeon in Kandivali, Orthopedic Doctor in Kandivali, Golden Knee Replacement in Kandivali, Best Trauma Surgeons in Kandivali, Best Orthopedic in Kandivali, Knee Surgeon in kandivali,best shoulder specialist in Kandivali,Hip Surgeon in Kandivali, Partial Knee Replacement in Kandivali, Robotic Knee Replacement Surgeon in Kandivali, Best Arthroscopy Doctors in Kandivali, Ortho Specialist in Kandivali, Orthopedic Care near Kandivali" />
          <link rel="canonical" href="https://drsonikshah.com/" />
          <meta http-equiv="cache-control" content="no-cache" />
          <meta http-equiv="expires" content="0" />
          <meta http-equiv="pragma" content="no-cache" />
          <meta property="og:title" content="Orthopedic Care near Kandivali | Sonik Shah" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://drsonikshah.com/" />
          <meta property="og:description" content="Seeking Orthopedic care near Kandivali? Our expert orthopedic doctors offer convenient and comprehensive treatment options for bone and joint issues." />
          <meta property="og:image" content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png" />
        </MetaTags>
        <Breadcrumb title={"orthopedic-near-kandivali"} />
        <section className="contact mt_75 xs_mt_45 pb_100 xs_pb_70 ">
          {/* <div className='head-cont'>
            <h1 className='special-h1'>Orthopedic Care near Kandivali</h1>
          </div> */}
          <div className="container">
            <Fade up>
              <div className="row">
                <div className="col-xl-4 col-md-6 col-lg-4">
                  <div className="contact_address">
                    <span className="contact_icon">
                      <i className="fas fa-map-marker-alt" aria-hidden="true" />
                    </span>
                    <h4>Office Address</h4>
                    <p>Namaha Healthcare,S.V Road, opp. Rajyaguru Flyover, Kandivali, Bhadran Nagar, Kandivali West, Mumbai, Maharashtra 400067</p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-lg-4">
                  <div className="contact_address">
                    <span className="contact_icon icon_2">
                      <i className="fas fa-phone-alt" aria-hidden="true" />
                    </span>
                    <h4>Phone Number</h4>
                    <p>+91 9892302803 </p>
                    <p>+91 9892302803</p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-lg-4">
                  <div className="contact_address">
                    <span className="contact_icon icon_3">
                      <i className="fas fa-envelope-open" aria-hidden="true" />
                    </span>
                    <h4> Address</h4>
                    <p> Shah.sonik@gmail.com </p>
                  </div>
                </div>
              </div>
            </Fade>

            <div className="contact_form_area mt_100 xs_mt_70">
              <div className="row">
                <Fade left>
                  <div className="col-lg-4">
                    <div className="contact_img">
                      <img
                        src={contactImg}
                        alt="Orthopedic Care near Kandivali"
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                </Fade>

                <Fade right>
                  <div className="col-lg-8">
                    <form className="faq_page_form" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                          <input
                            type="text"
                            name="fullName"
                            className="inputstyle"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="col-md-6">
                          {errors.email && <span className="error-text">{errors.email}</span>}
                          <input
                            type="email"
                            className="inputstyle"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email Address"
                          />
                        </div>
                        <div className="col-md-6">
                          {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
                          <input
                            type="text"
                            className="inputstyle"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="col-md-6">
                          {errors.subject && <span className="error-text">{errors.subject}</span>}
                          <input
                            type="text"
                            className="inputstyle"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Subject"
                          />
                        </div>
                        <div className="col-xl-12">
                          {errors.service && <span className="error-text">{errors.service}</span>}
                          <input
                            type="text"
                            className="inputstyle"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            placeholder="Service"
                          />
                        </div>
                        <div className="col-xl-12">
                          {errors.message && <span className="error-text">{errors.message}</span>}
                          <textarea
                            name="message"
                            className="inputstyle"
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Message"
                          />
                        </div>
                        <div className="col-xl-12">
                          <button type="submit" className="common_btn faq_btn">Submit Now</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Fade>
              </div>
            </div>

            <div className="row mt_100 xs_mt_70 py-5">
              <div className="col-xl-12">
                <div className="tf_contact_map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241148.15825008464!2d72.848294!3d19.197824!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b881a7309d%3A0x83bb0d31dc18f27e!2sDr%20Sonik%20Shah%2C%20Best%20Orthopaedic%20Surgeon%2C%20Knee%20Shoulder%20Arthroscopist%2C%20Minimal%20Invaise%20Joint%20Replacement%20Surgeon!5e0!3m2!1sen!2sin!4v1709189750851!5m2!1sen!2sin"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  export default ContactUs;
