import React, { useState } from "react";
import "../Css/Header.css";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import ServiceData from "../Asserts/ServiceData";
import logo from '../Asserts/logo.png'

const NavBar = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 78) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const onPress = () =>{
    return window.scrollTo(0,0)
  }

  window.addEventListener("scroll", changeColor);
  return (
    <>
      <section className="topbar">
        <div className="container" bis_skin_checked={1}>
          <div className="row" bis_skin_checked={1}>
            <div className="col-xl-9 col-lg-9 d-none d-md-block" bis_skin_checked={1}>
              <ul className="topbar_link d-flex flex-wrap">
                <li>
                  <a href="callto:123456789">
                    <i className="fas fa-phone-alt" aria-hidden="true" />
                    +91 9892302803
                  </a>
                </li>
                <li>
                  <a href="mailto:Shah.sonik@gmail.com">
                    <i className="fas fa-envelope" aria-hidden="true" />
                    Shah.sonik@gmail.com
                  </a>
                </li>
                <li className="special-address">
                  <p className="special-address">
                    <i className="fas fa-map-marker-alt" aria-hidden="true" />
                    Namaha Healthcare,S.V Road, Mumbai, Maharashtra 400067

                  </p>
                </li>
              </ul>
            </div>
            <div
              className="col-xl-3 col-lg-3 d-md-none d-lg-block"
              bis_skin_checked={1}
            >
              <ul className="topbar_icon d-flex flex-wrap">
                <li>
                  <a href="https://www.facebook.com/dr.sonikshah">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/maps/place/Dr+Sonik+Shah,+Best+Orthopaedic+Surgeon,+Knee+Shoulder+Arthroscopist,+Minimal+Invaise+Joint+Replacement+Surgeon/@19.197824,72.848294,11z/data=!4m6!3m5!1s0x3be7b7b881a7309d:0x83bb0d31dc18f27e!8m2!3d19.1978239!4d72.848294!16s%2Fg%2F11hf80v34g?ll=19.197824,72.848294&z=11&t=m&hl=en&gl=IN&mapclient=embed&cid=9492195147410633342&shorturl=1#">
                    <i className="fab fa-google-plus-square" aria-hidden="true" />
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
      </section>

      <section className="NavSection">
        <div className="container-fluid">
          <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            className={color ? "NavBar NavBar-bg" : "NavBar"}
          >
            <Container>
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  alt="Best Orthopedic Surgeon in Kandivali"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className="main-nav">
                <Nav>
                  <Nav.Link href="/" className="nav-link">
                    {" "}
                    <Link onClick={() => window.scrollTo(0, 0)}  to="/" className="nav-link">
                      {" "}
                      Home
                    </Link>
                  </Nav.Link>

                  <Nav.Link className="nav-link" href="/orthopedic-doctor-kandivali">
                    {" "}
                    <Link  onClick={() => window.scrollTo(0, 0)} className="nav-link" to="/orthopedic-doctor-kandivali">
                      About Us
                    </Link>
                  </Nav.Link>


                  <NavDropdown
                    className="nav-link "
                    title="Service"
                    id="basic-nav-dropdown"
                  >
                    <Row className="basic-nav-dropdown-col">
                      {ServiceData.map((ele, index) => {
                        const { ServiceName, slugs } = ele;
                        return (
                          <Col key={slugs} xs={12} md={4} sm={1}>
                            <Nav.Link href="/" className="">
                              <Link onClick={() => window.scrollTo(0, 0)}  to={`${slugs}`}>{ServiceName}</Link>
                            </Nav.Link>
                          </Col>
                        );
                      })}
                    </Row>
                  </NavDropdown>

                  <Nav.Link className="nav-link" href="/ortho-specialist-kandivali">
                    {" "}
                    <Link onClick={() => window.scrollTo(0, 0)}  className="nav-link" to="/ortho-specialist-kandivali">
                      FAQ
                    </Link>
                  </Nav.Link>
                  <Nav.Link onClick={() => window.scrollTo(0, 0)}  className="nav-link" href="/Gallery">
                    {" "}
                    <Link onClick={() => window.scrollTo(0, 0)}  className="nav-link" to="/Gallery">
                      Gallery
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="nav-link" href="/orthopedic-near-kandivali">
                    {" "}
                    <Link onClick={() => window.scrollTo(0, 0)}  className="nav-link" to="/orthopedic-near-kandivali">
                      Contact Us
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>

              <div className="socialLinks d-lg-flex d-none">
                <Link to={'/orthopedic-near-kandivali'} className="common_btn faq_btn">Enquiry Now</Link>
               
              </div>
            </Container>
          </Navbar>
  
        </div>
      </section>
    </>
  );
};

export default NavBar;
