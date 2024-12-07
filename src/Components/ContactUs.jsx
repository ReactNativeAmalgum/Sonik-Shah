import React from 'react'
import Breadcrumb from '../Pages/Breadcrumb'
import contactImg from "../Asserts/contact_img.webp";
import Fade from "react-reveal/Fade";
const ContactUs = () => {
  return (
    <>
    <Breadcrumb />  
        <section className="contact mt_75 xs_mt_45 pb_100 xs_pb_70">
  <div className="container" bis_skin_checked={1}>
  <Fade up>
    <div className="row" bis_skin_checked={1}>
      <div
        className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
        data-wow-duration="1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationName: "fadeInUp"
        }}
        bis_skin_checked={1}
      >
        <div className="contact_address" bis_skin_checked={1}>
          <span className="contact_icon">
            <i className="fas fa-map-marker-alt" aria-hidden="true" />
          </span>
          <h4>Office Address</h4>
          <p>All India Superspeciality Hospital, Flat 1,2 Kanchanganga chsl Next to balbharti school, Opp to shantilal modi road(S.M.Road) Kandivali west.. Mumbai 400067</p>
        </div>
      </div>
      <div
        className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
        data-wow-duration="1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationName: "fadeInUp"
        }}
        bis_skin_checked={1}
      >
        <div className="contact_address" bis_skin_checked={1}>
          <span className="contact_icon icon_2">
            <i className="fas fa-phone-alt" aria-hidden="true" />
          </span>
          <h4>Phone Number</h4>
          <p>+91 9892302803 </p>
          <p>+91 9892302803</p>
        </div>
      </div>
      <div
        className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
        data-wow-duration="1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationName: "fadeInUp"
        }}
        bis_skin_checked={1}
      >
        <div className="contact_address" bis_skin_checked={1}>
          <span className="contact_icon icon_3">
            <i className="fas fa-envelope-open" aria-hidden="true" />
          </span>
          <h4> Address</h4>
          <p> Shah.sonik@gmail.com </p>
          {/* <p>junayedallinone@gmail.com</p> */}
        </div>
      </div>
      {/* <div
        className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
        data-wow-duration="1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationName: "fadeInUp"
        }}
        bis_skin_checked={1}
      >
        <div className="contact_address" bis_skin_checked={1}>
          <span className="contact_icon icon_4">
            <i className="fas fa-globe" aria-hidden="true" />
          </span>
          <h4>Website Address</h4>
          <p>16/A, Romadan House City Tower New York, United States</p>
        </div>
      </div> */}
    </div>
    </Fade>
    <div className="contact_form_area mt_100 xs_mt_70" bis_skin_checked={1}>
      <div className="row" bis_skin_checked={1}>
      <Fade left>
        <div
          className="col-lg-4  wow fadeInLeft"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "fadeInLeft"
          }}
          bis_skin_checked={1}
        >
          <div className="contact_img" bis_skin_checked={1}>
            <img
              src={contactImg}
              alt="contact img"
              className=" img-fluid w-100"
            />
          </div>
        </div>
        </Fade>
        <Fade right>
        <div
          className="col-lg-8  wow fadeInRight"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "fadeInRight"
          }}
          bis_skin_checked={1}
        >
          <form className="contact_form">
            <div className="row" bis_skin_checked={1}>
              <div className="col-md-6" bis_skin_checked={1}>
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="col-md-6" bis_skin_checked={1}>
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="col-md-6" bis_skin_checked={1}>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="col-md-6" bis_skin_checked={1}>
                <input type="text" placeholder="Subject" />
              </div>
              <div className="col-xl-12" bis_skin_checked={1}>
                <input type="text" placeholder="Service" />
              </div>
              <div className="col-xl-12" bis_skin_checked={1}>
                <textarea rows={5} placeholder="Message" defaultValue={""} />
              </div>
              <div className="col-xl-12" bis_skin_checked={1}>
                <button className="common_btn">submit now</button>
              </div>
            </div>
          </form>
        </div>
        </Fade>
      </div>
    </div>
    <div
      className="row mt_100 xs_mt_70  wow fadeInUp py-5"
      data-wow-duration="1s"
      style={{
        visibility: "visible",
        animationDuration: "1s",
        animationName: "fadeInUp"
      }}
      bis_skin_checked={1}
    >
      <div className="col-xl-12" bis_skin_checked={1}>
        <div className="tf_contact_map" bis_skin_checked={1}>
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241148.15825008464!2d72.848294!3d19.197824!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b881a7309d%3A0x83bb0d31dc18f27e!2sDr%20Sonik%20Shah%2C%20Best%20Orthopaedic%20Surgeon%2C%20Knee%20Shoulder%20Arthroscopist%2C%20Minimal%20Invaise%20Joint%20Replacement%20Surgeon!5e0!3m2!1sen!2sin!4v1709189750851!5m2!1sen!2sin"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2527999752!2d-74.14448764398652!3d40.69763123336165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1685551467309!5m2!1sen!2sbd"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          /> */}
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default ContactUs