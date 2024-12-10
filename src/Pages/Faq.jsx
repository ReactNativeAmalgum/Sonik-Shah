import React, { } from "react";
import Breadcrumb from "./Breadcrumb";
import Accordion from 'react-bootstrap/Accordion';
import FaqData from "../Asserts/FaqData";
import Fade from 'react-reveal/Fade';
import { MetaTags } from "react-meta-tags";

const Faq = () => {
  // State for form fields
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
          accountLeadName: formData.fullName
        
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
  };
   
  return (
    <>
      <MetaTags>
        <title>Ortho Specialist in Kandivali | Sonik Shah</title>
        <meta name="description" content="Best Orthopedic Surgeon in Kandivali..." />
        <link rel="canonical" href="https://drsonikshah.com/" />
        <meta property="og:title" content="Ortho Specialist in Kandivali | Sonik Shah" />
        <meta property="og:description" content="Find the top Ortho Specialist in Kandivali..." />
        <meta property="og:image" content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png" />
      </MetaTags>
      <Breadcrumb title={'FAQ'} />
      <section className="faq_page pt_75 xs_pt_45 pb_100 xs_pb_70 custom-cont">
        <div className="head-cont">
          <h1 className='special-h1'>Ortho Specialist in Kandivali</h1>
        </div>
        <div className="container">
          <div className="faq_accordion accordion accordion-flush mb-5" id="accordionFlushExample">
            <div>
              <div className="row row-cols-1 row-cols-md-2">
                <Fade up>
                  {FaqData.map((v, i) => (
                    <Accordion className="col" key={i} defaultActiveKey="0">
                      <Accordion.Item eventKey={i}>
                        <Accordion.Header>{v.accordianTitle}</Accordion.Header>
                        <Accordion.Body>{v.accordionDescription}</Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  ))}
                </Fade>
              </div>
            </div>
          </div>

          <div className="faq_page_text mt_100 xs_mt_70 wow fadeInUp mb-5">
            <div className="row">
              <Fade right>
                <div className="col-lg-4">
                  <div className="faq_page_qus">
                    <h3>Have You Any Question</h3>
                    <p>
                      Dr. Sonik Shah is an experienced orthopedic doctor specializing in joint replacement surgeries, trauma care, and providing compassionate, high-quality care to patients in Kandivali and across Mumbai.
                    </p>
                    <p>With over ten years of experience, Dr. Shah provides exceptional orthopedic care and builds lasting patient relationships.</p>
                    <a href="#" className="common_btn">Contact Us</a>
                  </div>
                </div>
              </Fade>

              <Fade left>
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
        </div>
      </section>
    </>
  );
};

export default Faq;
