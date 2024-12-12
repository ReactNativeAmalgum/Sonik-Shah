import React from 'react';
import galleryData from '../Asserts/galleryData';

const Breadcrumb = ({ title }) => {
  // Determine the background image based on the page title or other criteria
  const getBackgroundImage = () => {
    switch (title) {
      case 'orthopedic-near-kandivali':
        return galleryData.trauma3;
      case 'Gallery':
        return galleryData.gal2;
      case 'Ortho Specialist in Kandivali':
        return galleryData.faq;
      case 'Orthopedic Doctor in Kandivali':
        return galleryData.orth4;
      case 'Golden Knee Replacement':
        return galleryData.goldknee;
      case 'Knee Replacement Surgery':
        return galleryData.kneesurger3;
      case 'Partial Knee Replacement':
        return galleryData.partial3;
      case 'Trauma Surgery':
        return galleryData.trauma4;
      case 'Shoulder Replacement Surgery':
        return galleryData.sholder4;
      case 'Robotic Knee Replacement Surgery':
        return galleryData.robot3;
      case 'Orthopedic Services':
        return galleryData.orth4;
      case 'Hip Replacement Surgery':
        return galleryData.hip4;
      case 'Arthroscopy':
        return galleryData.arth4;
      default:
        return galleryData.defaultBackground;
    }
  };

  const backgroundImage = getBackgroundImage();

  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImage})`,
        // backgroundSize:'fill',
        backgroundPosition: 'center',
      }}
      className="breadcrumb custom-cont"
    >
      <div className="breadcrumb_text">
        <div>
          <h1>{title}</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
