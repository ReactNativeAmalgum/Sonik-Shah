import React from 'react'
import foterbg from "../Asserts/footer_bg.jpg";
import servicesData from "../Asserts/ServiceData";
import { Link } from 'react-router-dom';
import logo from '../Asserts/logo.png'
import './footer.css'
const Footer = () => {
  return (

    <>
      <footer className="mt_60 py-5" style={{ backgroundColor: "#eee" }}>
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

            </div>
          </div>
          <div className="row mt_10" bis_skin_checked={1}>
            <div className="col-lg-3 col-sm-9 col-md-6" bis_skin_checked={1}>
              <div className="footer_left" bis_skin_checked={1}>
                <a href="/" className="tf_footer_logo">
                  <img
                    src={logo}
                    alt="Best Orthopedic Surgeon in Kandivali"
                    className="img-fluid w-100"
                  />
                </a>
                {/* <p>There are to popular belie Lorem is Ipsum is not simply random.</p> */}
                <div className="footer_mail" bis_skin_checked={1}>
                  <span>Hello to :</span>
                  <a href="#">Shah.sonik@gmail.com</a>
                </div>
                <div
                  className="tf_footer_icon d-flex flex-wrap align-items-center"
                  bis_skin_checked={1}
                  style={{ marginBottom: '0px' }}
                >
                  <span>Follow :</span>
                  <ul style={{ marginBottom: '0px', paddingLeft: '0px' }} className="d-flex flex-wrap">
                    <li>
                      <a href="https://www.facebook.com/dr.sonikshah">
                        <i className="fab fa-facebook-f" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/maps/place/Dr+Sonik+Shah,+Best+Orthopaedic+Surgeon,+Knee+Shoulder+Arthroscopist,+Minimal+Invaise+Joint+Replacement+Surgeon/@19.197824,72.848294,11z/data=!4m6!3m5!1s0x3be7b7b881a7309d:0x83bb0d31dc18f27e!8m2!3d19.1978239!4d72.848294!16s%2Fg%2F11hf80v34g?ll=19.197824,72.848294&z=11&t=m&hl=en&gl=IN&mapclient=embed&cid=9492195147410633342&shorturl=1">
                        <i className="fab fa-google-plus-square " aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/dr.sonikshah/">
                        <i className="fab fa-instagram" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/dr-sonik-shah-a8a69013">
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
                    <a href="/">home</a>
                  </li>
                  <li>
                    <a href="/orthopedic-doctor-kandivali">about us</a>
                  </li>
                  <li>
                    <a href="/shoulder-replacement-surgery">our service</a>
                  </li>
                  <li>
                    <a href="/ortho-specialist-kandivali">FAQ</a>
                  </li>
                  {/* <li>
              <a href="team.html">our team</a>
            </li> */}
                  <li>
                    <a href="orthopedic-near-kandivali">contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-12" bis_skin_checked={1}>
              <div className="quick_link" bis_skin_checked={1}>
                <h5>Our Services</h5>
                <ul className='row row-cols-2'>
                  {/* <div ></div> */}
                  {servicesData.map((v, i) => {
                    const { ServiceName, slugs } = v;
                    return (
                      <li className='col'>
                        <Link to={`${slugs}`}><a href={slugs}>{ServiceName}</a></Link>
                      </li>
                    )
                  })}

                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 col-md-6 order-md-2"
              bis_skin_checked={1}
            >
              <div className="address" bis_skin_checked={1}>
                <h5>Address</h5>
                <div className="tf_footer_address" bis_skin_checked={1}>
                  <p>
                    <i className="fas fa-map-marker-alt" aria-hidden="true" />
                    Namaha Healthcare,S.V Road, opp. Rajyaguru Flyover, Kandivali, Bhadran Nagar, Kandivali West, Mumbai, Maharashtra 400067                  </p>
                  <a href="#">
                    <i className="fas fa-envelope" aria-hidden="true" />
                    Shah.sonik@gmail.com
                  </a>
                  <a href="#">
                    <div style={{ display: 'none' }} >
                      <span>MS</span>
                    </div>
                    <i className="fas fa-phone-alt" aria-hidden="true" />
                    +91 9892302803 / +91 9892302803
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt_70 xs_mt_45 sm_margin " bis_skin_checked={1}>
            <div className="col-xl-12" bis_skin_checked={1}>

            </div>
          </div>
        </div>

      </footer>
      <div className='contianer-fluid' style={{ justifyContent: 'space-around' }}>
        <div className='row'>
          <div className='col bottom-col'>
            © Copyright . All Rights Reserved Dr. Sonik Shah
          </div>
          <div className='col bottom-col'>
            Designed by Shree Krishna Digital Marketing
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer