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
                  <a href="#">support@gmail.com</a>
                </div>
                <div
                  className="tf_footer_icon d-flex flex-wrap align-items-center"
                  bis_skin_checked={1}
                  style={{marginBottom:'0px'}}
                >
                  <span>Follow :</span>
                  <ul style={{marginBottom:'0px', paddingLeft:'0px'}} className="d-flex flex-wrap">
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
                    All India Superspeciality Hospital, Flat 1,2 Kanchanganga chsl Next to balbharti school, Opp to shantilal modi road(S.M.Road) Kandivali west.. Mumbai 400067
                  </p>
                  <a href="#">
                    <i className="fas fa-envelope" aria-hidden="true" />
                    Shah.sonik@gmail.com
                  </a>
                  <a href="#">
                    <div style={{display:'none'}} >
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

    </>
  )
}

export default Footer