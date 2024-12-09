import React from 'react'
import Breadcrumb from './Breadcrumb'
import BlogsData from "../Asserts/BlogsData";
import { MetaTags } from 'react-meta-tags';
const Blog = () => {
  return (
    <>
      <MetaTags>
        <title>Ortho Specialist in Kandivali | Sonik Shah </title>
        <meta title="Ortho Specialist in Kandivali | Sonik Shah " />
        <meta name="description" content="Best Orthopedic Surgeon in Kandivali, Orthopedic Doctor in Kandivali, Golden Knee Replacement in Kandivali, Best Trauma Surgeons in Kandivali, Best Orthopedic in Kandivali, Knee Surgeon in kandivali,best shoulder specialist in Kandivali,Hip Surgeon in Kandivali, Partial Knee Replacement in Kandivali, Robotic Knee Replacement Surgeon in Kandivali, Best Arthroscopy Doctors in Kandivali, Ortho Specialist in Kandivali, Orthopedic Care near Kandivali" />
        <link rel="canonical" href="https://drsonikshah.com/" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="Ortho Specialist in Kandivali | Sonik Shah " />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drsonikshah.com/" />
        <meta property="og:description" content="Find the top Ortho Specialist in Kandivali for comprehensive orthopedic care. Our specialist offers expert diagnosis and treatment for bone and joint conditions." />
        <meta property="og:image" content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png" />
      </MetaTags>
      <Breadcrumb />
      <section className="blog_page pt_75 xs_pt_45 pb_100 xs_pb_70 mb-5">
        <div className="container" bis_skin_checked={1}>
          <div className="row" bis_skin_checked={1}>
            {BlogsData.map((v, i) => {
              return (
                <>
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
                    <div className="single_blog" bis_skin_checked={1}>
                      <div className="blog_img" bis_skin_checked={1}>
                        <a href="#" className="category">
                          Medical
                        </a>
                        <img
                          src="https://html.themefax.com/madifax/images/blog-1.jpg"
                          alt="blog img"
                          className=" img-fluid w-100"
                        />
                      </div>
                      <div className="blog_text" bis_skin_checked={1}>
                        <ul className="d-flex flex-wrap blog_date">
                          <li>
                            <i className="fas fa-user" aria-hidden="true" />
                            Admin
                          </li>
                          <li>
                            <i className="fas fa-calendar-alt" aria-hidden="true" />
                            22 june 2023
                          </li>
                        </ul>
                        <a href="blog_details.html" className="blog_heading">
                          Telehealth Services Are Ready To Help Your Family
                        </a>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing. Veritatis
                          consectetur ipsum.
                        </p>
                        <div className="blog_text_icon" bis_skin_checked={1}>
                          <a className="blog_link" href="blog_details.html">
                            read more{" "}
                            <i className="far fa-long-arrow-right" aria-hidden="true" />
                          </a>
                          <ul className="d-flex flex-wrap blog_react">
                            <li>
                              <i className="fas fa-comment-lines" aria-hidden="true" />5
                            </li>
                            <li>
                              <i className="fas fa-heart" aria-hidden="true" />
                              20
                            </li>
                            <li>
                              <i className="fas fa-share-alt" aria-hidden="true" />
                              15
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
          {/* <div className="row mt_60" bis_skin_checked={1}>
      <div className="col-12" bis_skin_checked={1}>
        <div id="pagination" bis_skin_checked={1}>
          <nav aria-label="...">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="far fa-angle-double-left" aria-hidden="true" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link active" href="#">
                  01
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  02
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  03
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="far fa-angle-double-right" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div> */}
        </div>
      </section>

    </>
  )
}

export default Blog