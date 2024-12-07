import React from 'react'
import foterbg from "../Asserts/footer_bg.jpg";
import servicesData from "../Asserts/ServiceData";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    
    <>
        <footer className="mt_60 py-5" style={{ backgroundColor:"#eee" }}>
  <div className="container" bis_skin_checked={1}>
    <div className="row" bis_skin_checked={1}>
      <div
        className="col-xl-12 wow fadeInUp"
        data-wow-duration="1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationName: "fadeInUp"
        }}
        bis_skin_checked={1}
      >
        {/* <div className="subscription" bis_skin_checked={1}>
          <div
            className="row justify-content-between align-items-center"
            bis_skin_checked={1}
          >
            <div className="col-xxl-6 col-lg-6 col-xl-7" bis_skin_checked={1}>
              <div className="subscribe_text" bis_skin_checked={1}>
                <h2>Subscribe for the Exclusive Updates!</h2>
              </div>
            </div>
            <div className="col-xxl-5 col-lg-6 col-xl-5" bis_skin_checked={1}>
              <form action="#" className="subscrib_form">
                <input type="text" placeholder="your Email Address" />
                <button className="common_btn subscrib_btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    <div className="row mt_10" bis_skin_checked={1}>
      <div className="col-lg-3 col-sm-9 col-md-6" bis_skin_checked={1}>
        <div className="footer_left" bis_skin_checked={1}>
          <a href="index.html" className="tf_footer_logo">
            <img
              src="https://drsonikshah.com/assets/img/newimg/Untitled%20design.png"
              alt="MediFax"
              className="img-fluid w-100"
            />
          </a>
          {/* <p>There are to popular belie Lorem is Ipsum is not simply random.</p> */}
          <div className="footer_mail" bis_skin_checked={1}>
            <span>Hello to :</span>
            <a href="#">support@gmail.com</a>
          </div>
          <div
            className="tf_footer_icon d-flex flex-wrap align-items-center"
            bis_skin_checked={1}
          >
            <span>Follow :</span>
            <ul className="d-flex flex-wrap">
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
                  <i className="fab fa-pinterest-p" aria-hidden="true" />
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
      </div>
      <div className="col-lg-2 col-sm-6 col-md-6" bis_skin_checked={1}>
        <div className="quick_link" bis_skin_checked={1}>
          <h5>Company</h5>
          <ul>
            <li>
              <a href="index.html">home</a>
            </li>
            <li>
              <a href="about.html">about us</a>
            </li>
            <li>
              <a href="service.html">our service</a>
            </li>
            {/* <li>
              <a href="team.html">our team</a>
            </li> */}
            <li>
              <a href="contact.html">contact us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 col-md-3" bis_skin_checked={1}>
        <div className="quick_link" bis_skin_checked={1}>
          <h5>Our Services</h5>
          <ul className='row row-cols-2'>
          {/* <div ></div> */}
          {servicesData.map((v,i)=>{
            const { ServiceName, slugs } = v;
            return(
              <li className='col'>
              <Link to={`${slugs}`}><a href={slugs}>{ServiceName}</a></Link>
            </li>
            )
          })}
            {/* <li>
              <a href="#">Our Process</a>
            </li> */}
            {/* <li>
              <a href="#">Appointment</a>
            </li>
            <li>
              <a href="faq.html">faq</a>
            </li>
            <li>
              <a href="privacy.html">Privacy Policy</a>
            </li>
            <li>
              <a href="terms_condition.html">Terms &amp; Conditions</a>
            </li> */}
          </ul>
        </div>
      </div>
      {/* <div className="col-lg-2 col-sm-6 col-md-3" bis_skin_checked={1}>
        <div className="quick_link" bis_skin_checked={1}>
          <h5>Quick Link</h5>
          <ul>
            <li>
              <a href="#">Why Choose Us</a>
            </li>
            <li>
              <a href="priceing.html">Pricing Plan</a>
            </li>
            <li>
              <a href="blog.html">News &amp; Articles</a>
            </li>
            <li>
              <a href="sing_up.html">login</a>
            </li>
            <li>
              <a href="#">Subscribe</a>
            </li>
          </ul>
        </div>
      </div> */}
      <div
        className="col-lg-3 col-sm-6 col-md-6 order-md-2"
        bis_skin_checked={1}
      >
        <div className="address" bis_skin_checked={1}>
          <h5>Address</h5>
          <div className="tf_footer_address" bis_skin_checked={1}>
            <p>
              <i className="fas fa-map-marker-alt" aria-hidden="true" />
              All India Superspeciality Hospital, Flat 1,2 Kanchanganga chsl Next to balbharti school, Opp to shantilal modi road(S.M.Road) Kandivali west.. Mumbai 400067
            </p>
            <a href="#">
              <i className="fas fa-envelope" aria-hidden="true" />
              Shah.sonik@gmail.com
            </a>
            <a href="#">
              <i className="fas fa-phone-alt" aria-hidden="true" />
              +91 9892302803 / +91 9892302803
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt_70 xs_mt_45 sm_margin " bis_skin_checked={1}>
      <div className="col-xl-12" bis_skin_checked={1}>
        <div
          className="copyright d-flex flex-wrap justify-content-between"
          bis_skin_checked={1}
        >
          <p>2024 sonikshah. All rights reserved.</p>
          <ul className="d-flex flex-wrap">
            <li>
              <a href="terms_condition.html">Terms and conditions</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="privacy.html">Privacy policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer