import React from 'react';
import './About.css'; // Assuming you have an external CSS file for styling

export default function About() {
  return (
    <div className="about-container  container ">
      <div className="row pt-5">
        <div className="col-md-6">
          <div className="about-content">
            <h2 className="section-title"><span className="highlighted-text">First Option</span> Engineering Services</h2>
            <p className="section-description">
              We specialize in providing a range of services including:
            </p>
            <ul className="service-list">
              <li>Architecture Design</li>
              <li>Engineering Design (Structure - MEP)</li>
              <li>Infrastructure</li>
              <li>BIM modeling for architects, Engineers, General contractors, and developers</li>
              <li>BIM coordination</li>
              <li>Shop drawings, BOQ, design development, and detailing services using BIM tool</li>
              <li>Laser Scan to BIM model using point cloud services</li>
              <li>BIM software development and Revit plugins services</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <img  src={process.env.PUBLIC_URL +"/Imgs/about.jpg"} alt="Description of the image" className="about-image" />
        </div>
      </div>

      <div className="row pt-5">
        <div className="col-md-6 order-md-2">
          <img src={process.env.PUBLIC_URL +"/Imgs/OurMission.jpg"} alt="Description of the image" className="mission-image img-fluid animate__animated animate__fadeInRight" />
        </div>
        <div className="col-md-6">
          <div className="about-content">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-description">
              <span className="highlighted-text">FIRST OPTION</span> aims to deliver efficient projects to customers through the latest BIM technology, optimizing project generation and management with minimized time and cost.
            </p>
          </div>
        </div>
      </div>

      <div className="row pt-5">
        <div className="col-md-6">
          <div className="about-content">
            <h2 className="section-title">Our Vision</h2>
            <p className="section-description">
              Quality, time, and the latest technology are our core beliefs. Leveraging BIM technology and modern tech trends, we aim to enhance the construction industry's efficiency and product quality through fast-track projects.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <img src={process.env.PUBLIC_URL +"/Imgs/OurVision.jpg"} alt="Description of the image" className="vision-image img-fluid animate__animated animate__fadeInLeft" />
        </div>
      </div>

      <div className="row pt-5 pb-5">
        <div className="col-md-6 order-md-2">
          <img src={process.env.PUBLIC_URL +"/Imgs/OurValues.jpg"} alt="Description of the image" className="values-image img-fluid animate__animated animate__fadeInRight" />
        </div>
        <div className="col-md-6">
          <div className="about-content">
            <h2 className="section-title">Our Values</h2>
            <ul className="values-list">
              <li><strong>Quality:</strong> We ensure the highest quality levels.</li>
              <li><strong>Efficiency:</strong> We provide high quality in less time to improve overall efficiency.</li>
              <li><strong>Technology Synchronization:</strong> We synchronize our workflow with modern technology trends, developing BIM software and scripts to automate time-consuming tasks.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
