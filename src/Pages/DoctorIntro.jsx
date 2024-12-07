import React from "react";
import "../Css/DoctorIntro.css";
import Fade from 'react-reveal/Fade';
import ServiceData from "../Asserts/ServiceData";

const DoctorIntro = () => {
  return (
    <>
      <section className="section section-about">
        <div className="tm-half-section-bg right" bis_skin_checked={1}>
          <img
            src="https://www.drsachintapasvi.com/img/appointment-bg.jpg"
            alt="about hafl bg"
          />
        </div>
        <div className="container" bis_skin_checked={1}>
          <div className="row" bis_skin_checked={1} style={{height:"76vh"}}>
          <Fade left>
            <div className="col-lg-7 align-self-center" bis_skin_checked={1}>
              <div className="about-box" bis_skin_checked={1}>
                <div className="section-title2 dark" bis_skin_checked={1}>
                  <h4>Dr. SONIK B. SHAH</h4>
                </div>
                <div className="row doctorIntro" bis_skin_checked={1}>
                  <div className="col-lg-4 text-center" bis_skin_checked={1}>
                    <img
                      src="https://drsonikshah.com/assets/img/sonik.jpg"
                      className="img-fluid rounded-circle sonik-shah-img"
                      alt="sonk shah"
                    />
                  </div>
                  <div
                    className="col-lg-8"
                    bis_skin_checked={1}
                    style={{ zIndex: "1000", backgroundColor: "#fff" ,padding:"13px", }}
                  >
                    <p>
                    Dr. Sonik Shah is a young, active, sports-loving orthopedic surgeon. Dr. Sonik Shah, an orthopedic surgeon, has been treating patients in Mumbai for more than a decade. In addition, patients from all over the country travel to visit him. Dr. Sonik Shah, who is known for providing compassionate care and excellent surgical outcomes, enjoys the teamwork and relationships he has with his many patients.

                    </p>
                    <p>
                    He honed his clinical skills at Nair Hospital and Shatabdi Hospital (high patient turnover facilities in Mumbai). After getting expertise in primary and complex trauma procedures at the grassroots level, he decided to further his education in orthopedics with experts in minimal invasive joint replacement procedures in Mumbai.

                    </p>

                    {/* <a
                      href="doctor.html"
                      className="btn "
                      bis_skin_checked={1}
                    >
                      Read More
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            </Fade>
            <Fade right style={{height:"90vh"}}>
            <div className="col-lg-5 mt-4" bis_skin_checked={1}>
              <div className="section-title2" bis_skin_checked={1}>
                <h4>Book An Appointment</h4>
              </div>
              <form
                role="form"
                acceptCharset="utf-8"
                method="post"
                action="enquiry.php"
                onsubmit="return validateform();"
                className="appointment-form"
              >
                <div className="form-group" bis_skin_checked={1}>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    required=""
                  />
                </div>
                <div className="form-group" bis_skin_checked={1}>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Contact No"
                    required=""
                  />
                </div>
                <div className="form-group" bis_skin_checked={1}>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    required=""
                  />
                </div>
                <div className="form-group" bis_skin_checked={1}>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="form-group" bis_skin_checked={1}>
                  <input
                    type="date"
                    className="form-control"
                    name="app_date"
                    id="app_date"
                    placeholder="Appointment Date"
                    required=""
                  />
                </div>
                <div className="row">
                <div className="form-group col-7 row" bis_skin_checked={1}>
                <select class="form-select " aria-label="Default select example">
  <option selected>select Services</option>
  {ServiceData.map((v,i)=>{
    return(
      <option value={i}>{v.ServiceName}</option>
    )
  })}
  
  {/* <option value="2">Two</option>
  <option value="3">Three</option> */}
</select>
                  {/* <select
                    className="drpdwn"
                    name="ddllocation"
                    id="ddllocation"
                    required=""
                  >
                    <option className="colorblack" value="">
                      --Select Location--
                    </option>
                    <option className="colorblack">Camp Clinic</option>
                    <option className="colorblack">F.C. Road Clinic</option>
                    <option className="colorblack">Jupiter Hospital</option>
                  </select> */}
                </div>
                </div>
                <div className="form-group" bis_skin_checked={1}>
                  <textarea
                    rows={2}
                    name="message"
                    placeholder="Message"
                    id="message"
                    className="form-control"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="form-group" bis_skin_checked={1}>
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LeiUpkUAAAAAEM4mA3OFMjm51l1y8Prhvq7uRBC"
                    bis_skin_checked={1}
                  >
                    {/* <div
                      style={{ width: 304, height: 78 }}
                      bis_skin_checked={1}
                    >
                      <div bis_skin_checked={1}>
                        <iframe
                          title="reCAPTCHA"
                          width={304}
                          height={78}
                          role="presentation"
                          name="a-35xco97ktam3"
                          frameBorder={0}
                          scrolling="no"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                          src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LeiUpkUAAAAAEM4mA3OFMjm51l1y8Prhvq7uRBC&co=aHR0cHM6Ly93d3cuZHJzYWNoaW50YXBhc3ZpLmNvbTo0NDM.&hl=en&v=1kRDYC3bfA-o6-tsWzIBvp7k&size=normal&cb=r7qnkhigz9q"
                          bis_size='{"x":1064,"y":1923,"w":304,"h":78,"abs_x":1064,"abs_y":1923}'
                        />
                      </div>
                      <textarea
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                        className="g-recaptcha-response"
                        style={{
                          width: 250,
                          height: 40,
                          border: "1px solid rgb(193, 193, 193)",
                          margin: "10px 25px",
                          padding: 0,
                          resize: "none",
                          display: "none",
                        }}
                        defaultValue={""}
                      />
                    </div> */}
                    {/* <iframe style={{ display: "none" }} /> */}
                  </div>
                </div>
                <div className="form-group" bis_skin_checked={1}>
                  <button className="btn bookAppointment">BOOK APPOINTMENT</button>
                </div>
              </form>
            </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorIntro;
