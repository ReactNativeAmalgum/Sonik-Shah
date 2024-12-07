import React from "react";
import Breadcrumb from "./Breadcrumb";
import Accordion from 'react-bootstrap/Accordion';
import FaqData from "../Asserts/FaqData";
import Fade from 'react-reveal/Fade';

const Faq = () => {
  return (
    <>
      <Breadcrumb />
      {/* <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> */}
      <section className="faq_page pt_75 xs_pt_45 pb_100 xs_pb_70">
        <div className="container" bis_skin_checked={1}>
          <div
            className="faq_accordion accordion accordion-flush mb-5"
            id="accordionFlushExample"
            bis_skin_checked={1}
          >
            <div className="" bis_skin_checked={1}>
              <div
                className="row row-cols-1 row-cols-md-2 wow fadeInLeft"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInLeft",
                }}
                bis_skin_checked={1}
              >
                <Fade up>
                  {FaqData.map((v, i) => {
                    return (
                      <>
                        <Accordion className="col" defaultActiveKey="0">
                          <Accordion.Item className="" eventKey={i}>
                            <Accordion.Header>{v.accordianTitle} </Accordion.Header>
                            <Accordion.Body>
                              {v.accordionDescription}
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </>
                    )
                  })}
                </Fade>
              </div>

              {/* <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> */}
              {/* <div className="accordion-item" bis_skin_checked={1}>
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Where Can I Go To Provide A Sample For Testing?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                    bis_skin_checked={1}
                    style={{}}
                  >
                    <div className="accordion-body" bis_skin_checked={1}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do isus mods mpor incididunt ut labore et dolore magna
                      aliqua. Ut en onim ad minim on adipiscing elit veniam.
                    </div>
                  </div>
                </div>
                <div className="accordion-item" bis_skin_checked={1}>
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      What Happens To My Sample Once I Have Provided It?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                    bis_skin_checked={1}
                    style={{}}
                  >
                    <div className="accordion-body" bis_skin_checked={1}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do isus mods mpor incididunt ut labore et dolore magna
                      aliqua. Ut en onim ad minim on adipiscing elit veniam.
                    </div>
                  </div>
                </div> */}
              {/* <div className="accordion-item" bis_skin_checked={1}>
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      What Will Laboratory Testing Cost Me?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                    bis_skin_checked={1}
                  >
                    <div className="accordion-body" bis_skin_checked={1}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do isus mods mpor incididunt ut labore et dolore magna
                      aliqua. Ut en onim ad minim on adipiscing elit veniam.
                    </div>
                  </div>
                </div>
                <div className="accordion-item" bis_skin_checked={1}>
                  <h2 className="accordion-header" id="flush-headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      Can I Make Appointments by Phone?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                    bis_skin_checked={1}
                  >
                    <div className="accordion-body" bis_skin_checked={1}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do isus mods mpor incididunt ut labore et dolore magna
                      aliqua. Ut en onim ad minim on adipiscing elit veniam.
                    </div>
                  </div>
                </div>
                <div className="accordion-item" bis_skin_checked={1}>
                  <h2 className="accordion-header" id="flush-headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      Using Innovative Technology
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFive"
                    data-bs-parent="#accordionFlushExample"
                    bis_skin_checked={1}
                  >
                    <div className="accordion-body" bis_skin_checked={1}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do isus mods mpor incididunt ut labore et dolore magna
                      aliqua. Ut en onim ad minim on adipiscing elit veniam.
                    </div>
                  </div>
                </div> */}
              {/* </div> */}
              {/* <div
                className="col-lg-6 wow fadeInRight"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInRight",
                }}
                bis_skin_checked={1}
              >
                <div className="accordion-item" bis_skin_checked={1}>
                  <h2 className="accordion-header" id="flush-headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseSix"
                      aria-expanded="false"
                      aria-controls="flush-collapseSix"
                    >
                      Where Can I Go To Provide A Sample For Testing?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingSix"
                    data-bs-parent="#accordionFlushExample"
                    bis_skin_checked={1}
                    style={{}}
                  >
                    <div className="accordion-body" bis_skin_checked={1}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do isus mods mpor incididunt ut labore et dolore magna
                      aliqua. Ut en onim ad minim on adipiscing elit veniam.
                    </div>
                  </div>
                </div>
                <div className="accordion-item" bis_skin_checked={1}>
                  <h2 className="accordion-header" id="flush-headingSeven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseSeven"
                      aria-expanded="false"
                      aria-controls="flush-collapseSeven"
                    >
                      What Happens To My Sample Once I Have Provided It?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingSeven"
                    data-bs-parent="#accordionFlushExample"
                    bis_skin_checked={1}
                  >
                    <div className="accordion-body" bis_skin_checked={1}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do isus mods mpor incididunt ut labore et dolore magna
                      aliqua. Ut en onim ad minim on adipiscing elit veniam.
                    </div>
                  </div>
                </div>
                <div className="accordion-item" bis_skin_checked={1}>
                  <h2 className="accordion-header" id="flush-headingEight">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseEight"
                      aria-expanded="false"
                      aria-controls="flush-collapseEight"
                    >
                      What Will Laboratory Testing Cost Me?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingEight"
                    data-bs-parent="#accordionFlushExample"
                    bis_skin_checked={1}
                  >
                    <div className="accordion-body" bis_skin_checked={1}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do isus mods mpor incididunt ut labore et dolore magna
                      aliqua. Ut en onim ad minim on adipiscing elit veniam.
                    </div>
                  </div>
                </div>
                <div className="accordion-item" bis_skin_checked={1}>
                  <h2 className="accordion-header" id="flush-headingNine">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseNine"
                      aria-expanded="false"
                      aria-controls="flush-collapseNine"
                    >
                      Can I Make Appointments by Phone?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseNine"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingNine"
                    data-bs-parent="#accordionFlushExample"
                    bis_skin_checked={1}
                  >
                    <div className="accordion-body" bis_skin_checked={1}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do isus mods mpor incididunt ut labore et dolore magna
                      aliqua. Ut en onim ad minim on adipiscing elit veniam.
                    </div>
                  </div>
                </div>
                <div className="accordion-item" bis_skin_checked={1}>
                  <h2 className="accordion-header" id="flush-headingTen">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTen"
                      aria-expanded="false"
                      aria-controls="flush-collapseTen"
                    >
                      Using Innovative Technology
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTen"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTen"
                    data-bs-parent="#accordionFlushExample"
                    bis_skin_checked={1}
                  >
                    <div className="accordion-body" bis_skin_checked={1}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do isus mods mpor incididunt ut labore et dolore magna
                      aliqua. Ut en onim ad minim on adipiscing elit veniam.
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div
            className="faq_page_text mt_100 xs_mt_70 wow fadeInUp mb-5"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
            bis_skin_checked={1}
          >
            <div className="row" bis_skin_checked={1}>
              <Fade right>
                <div className="col-lg-4" bis_skin_checked={1}>
                  <div className="faq_page_qus" bis_skin_checked={1}>
                    <h3>Have You Any Question</h3>
                    <p>
                      Dr. Sonik Shah is an experienced orthopedic doctor specializing in joint replacement surgeries, trauma care, and providing compassionate, high-quality care to patients in Kandivali and across Mumbai.                    </p>
                    <p>
                      With over ten years of experience, Dr. Shah provides exceptional orthopedic care and builds lasting patient relationships.
                    </p>
                    <a href="#" className="common_btn">
                      Contact Us
                    </a>
                  </div>
                </div>
              </Fade>
              <Fade left>
                <div className="col-lg-8" bis_skin_checked={1}>
                  <form className="faq_page_form">
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
                        <textarea
                          rows={5}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-xl-12" bis_skin_checked={1}>
                        <button className="common_btn faq_btn">submit now</button>
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
