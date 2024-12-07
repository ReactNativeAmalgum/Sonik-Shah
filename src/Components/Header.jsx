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
                  alt=""
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

                  <Nav.Link className="nav-link" href="/AboutUs">
                    {" "}
                    <Link className="nav-link" to="/AboutUs">
                      About Us
                    </Link>
                  </Nav.Link>

                  {/* <Nav.Link
                    className="nav-link"
                    href="/best-agro-tourism-resort-neral"
                  >
                    {" "}
                    <Link
                      className="nav-link"
                      to="/best-agro-tourism-resort-neral"
                    >
                      Rooms
                    </Link>
                  </Nav.Link> */}

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
                  {/* <Nav.Link  className="nav-link"  href="/resort-neral-stay">                 
                    <Link  className="nav-link"  to="/resort-neral-stay">Services</Link></Nav.Link> */}

                  {/* <Nav.Link href="/Gallery" className="nav-link">
                    {" "}
                    <Link to="/Gallery" className="nav-link">
                      {" "}
                      Gallery
                    </Link>
                  </Nav.Link> */}
                  {/* <Nav.Link className="nav-link" href="/Blog">
                    {" "}
                    <Link className="nav-link" to="/Blog">
                      Blog
                    </Link>
                  </Nav.Link> */}
                  <Nav.Link className="nav-link" href="/faq">
                    {" "}
                    <Link className="nav-link" to="/faq">
                      FAQ
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="nav-link" href="/Contact">
                    {" "}
                    <Link className="nav-link" to="/Contact">
                      Contact Us
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>

              <div className="socialLinks d-lg-flex d-none">
                <button className="common_btn faq_btn">Enquiry Now</button>
                {/* <a
                  href="https://neelresorts.in/Neelresort/OnlineBooking"
                  target="_blank"
                >
                  {" "}
                  <i className="fa fa-address-book" /> <span>Book Now</span>
                </a> */}
              </div>
            </Container>
          </Navbar>
        </div>
      </section>
    </>
  );
};

export default NavBar;
