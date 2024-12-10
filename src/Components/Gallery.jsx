import React from 'react';
import { Image } from 'antd';
import Breadcrumb from '../Pages/Breadcrumb';
import { MetaTags } from 'react-meta-tags';
import galleryData from '../Asserts/galleryData';

const Gallery = () => {
  const galleryImages = [
    { src: galleryData.gal1, alt: "Orthopedic Surgery" },
    { src: galleryData.gal2, alt: "Knee Replacement" },
    { src: galleryData.gal3, alt: "Shoulder Specialist" },
  ];

  return (
    <>
      <MetaTags>
        <title>Orthopedic Care near Kandivali | Sonik Shah</title>
        <meta name="title" content="Orthopedic Care near Kandivali | Sonik Shah" />
        <meta name="description" content="Best Orthopedic Surgeon in Kandivali, Orthopedic Doctor in Kandivali, Golden Knee Replacement in Kandivali, Best Trauma Surgeons in Kandivali, Best Orthopedic in Kandivali, Knee Surgeon in kandivali,best shoulder specialist in Kandivali,Hip Surgeon in Kandivali, Partial Knee Replacement in Kandivali, Robotic Knee Replacement Surgeon in Kandivali, Best Arthroscopy Doctors in Kandivali, Ortho Specialist in Kandivali, Orthopedic Care near Kandivali" />
        <link rel="canonical" href="https://drsonikshah.com/" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="Orthopedic Care near Kandivali | Sonik Shah" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drsonikshah.com/" />
        <meta property="og:description" content="Seeking Orthopedic care near Kandivali? Our expert orthopedic doctors offer convenient and comprehensive treatment options for bone and joint issues." />
        <meta property="og:image" content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png" />
      </MetaTags>
      <Breadcrumb title={'Gallery'} />
      <section className="contact mt_75 xs_mt_45 pb_100 xs_pb_70 custom-cont">
        <div className="head-cont">
          <h1 className="special-h1">Orthopedic Care near Kandivali</h1>
        </div>
        <div className="container">
          <div
            className="gallery"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              justifyContent: 'center',
            }}
          >
            <Image.PreviewGroup>
              {galleryImages.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  style={{ borderRadius: '8px' }}
                />
              ))}
            </Image.PreviewGroup>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
