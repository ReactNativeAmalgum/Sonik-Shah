import React from 'react';
import '../Css/HomeAboutDr.css'
import galleryData from '../Asserts/galleryData';

export default function HomeAboutDr() {
  return (
    <section className="home-about-dr py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-4 mb-md-0">
            <img
              src={galleryData.dr}
              alt="Doctor"
              className="img-fluid"
            />
          </div>
          {/* About Text Column */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="common_heading">
              <h5>PROFILE</h5>
              <h2>DR. SONIK B. SHAH   </h2>
              {/* <span className='qualification'> M.S.( ORTHO) MUMBAI <br />Consultant Orthopedic Surgeon Joint Replacement, Arthroscopy & Sports Medicine Specialist</span> <br /> */}
              <p>
                Dr. Sonik Shah is a young, active, sports-loving orthopedic surgeon. Dr. Sonik Shah, an orthopedic surgeon, has been treating patients in Mumbai for more than a decade. In addition, patients from all over the country travel to visit him. Dr. Sonik Shah, who is known for providing compassionate care and excellent surgical outcomes, enjoys the teamwork and relationships he has with his many patients.

              </p>
              <p>
                He honed his clinical skills at Nair Hospital and Shatabdi Hospital (high patient turnover facilities in Mumbai). After getting expertise in primary and complex trauma procedures at the grassroots level, he decided to further his education in orthopedics with experts in minimal invasive joint replacement procedures in Mumbai.

              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
