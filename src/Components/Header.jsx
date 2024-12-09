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
                <li>
                  <p>
                    <i className="fas fa-map-marker-alt" aria-hidden="true" />
                    modi road(S.M.Road) Kandivali west.. Mumbai 400067

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
                    <i className="fab fa-youtube" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-g" aria-hidden="true" />
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
                    <Link to="/" className="nav-link">
                      {" "}
                      Home
                    </Link>
                  </Nav.Link>

                  <Nav.Link className="nav-link" href="/orthopedic-doctor-kandivali">
                    {" "}
                    <Link className="nav-link" to="/orthopedic-doctor-kandivali">
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
                              <Link to={`${slugs}`}>{ServiceName}</Link>
                            </Nav.Link>
                          </Col>
                        );
                      })}
                    </Row>
                  </NavDropdown>

                  <Nav.Link className="nav-link" href="/ortho-specialist-kandivali">
                    {" "}
                    <Link className="nav-link" to="/ortho-specialist-kandivali">
                      FAQ
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="nav-link" href="/Gallery">
                    {" "}
                    <Link className="nav-link" to="/Gallery">
                      Gallery
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="nav-link" href="/orthopedic-near-kandivali">
                    {" "}
                    <Link className="nav-link" to="/orthopedic-near-kandivali">
                      Contact Us
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>

              <div className="socialLinks d-lg-flex d-none">
                <button className="common_btn faq_btn">Enquiry Now</button>
               
              </div>
            </Container>
          </Navbar>
          {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
            </div>
            
          </nav> */}
        </div>
      </section>
    </>
  );
};

export default NavBar;
