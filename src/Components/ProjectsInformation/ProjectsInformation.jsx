
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import './projectInformation.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectsInformation() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("Project Type");
  const [selectedStageItem, setSelectedStageItem] = useState("Project Statge");
  const [selectedQuarterItem, setSelectedQuarterItem] = useState("Quarter");

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Redirect to another page after the loading screen
      navigate('/Scope01');
    }, 2000);
  };
  function handleItemClick(itemText) {
    setSelectedItem(itemText);
  }
  function handleItemStageClick(itemText) {
    setSelectedStageItem(itemText);
  }
  function handleItemQuarterClick(itemText) {
    setSelectedQuarterItem(itemText);
  }

  return (
    <>
      <div className='projectInformationPage d-flex justify-content-center align-items-center mt-5'>
        <div className="container d-flex justify-content-center align-items-center projectInfoContainer m-0 ">
          <div className="row d-flex align-items-center">
            <Form.Label className='title'>Project Information</Form.Label>
            <div className="col-md-4  ">
              <FloatingLabel controlId="floatingInput" label="Project Name" className="mb-3">
                <Form.Control size='sm' type="text" placeholder="name@example.com" />
              </FloatingLabel>
              <Dropdown className='mb-3'  >
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  {selectedItem}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleItemClick("Restaurant")}>Restaurant</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Material Factory")}>Material Factory</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Transportation Project")}>Transportation Project</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Manufacturing Facility")}>Manufacturing Facility</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Mining Operation")}>Mining Operation</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Residential Housing Development")}>Residential Housing Development</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("University Campus Expansion")}>University Campus Expansion</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Hospital Construction")}>Hospital Construction</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Public Space Development")}>Public Space Development</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Museum and Cultural Center Construction")}>Museum and Cultural Center Construction</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("New Office Buildings")}>New Office Buildings</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Oil Refinery Expansions")}>Oil Refinery Expansions</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Chemical Plant Construction")}>Chemical Plant Construction</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Pharmaceutical Production Facilities")}>Pharmaceutical Production Facilities</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Automotive Manufacturing Plants")}>Automotive Manufacturing Plants</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Aerospace Industry Projects")}>Aerospace Industry Projects</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Mining Exploration and Drilling")}>Mining Exploration and Drilling</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Hydropower Dam Construction")}>Hydropower Dam Construction</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Cruise Ship Terminal Construction")}>Cruise Ship Terminal Construction</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Green Building Certification Projects")}>Green Building Certification Projects</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Smart Grid Deployment")}>Smart Grid Deployment</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Energy Storage Projects")}>Energy Storage Projects</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className='mb-3'  >
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                  {selectedStageItem}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleItemStageClick("Pre-Construction Stage")}>Pre-Construction Stage</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemStageClick("Design Stage")}>Design Stage</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemStageClick("Construction Stage")}>Construction Stage</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemStageClick("Operation Stage")}>Operation Stage</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className='mb-3'  >
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {selectedQuarterItem}
                </Dropdown.Toggle>
                <Dropdown.Menu>

                  <Dropdown.Item onClick={() => handleItemQuarterClick("Quarter 1 : April , May , June")}>Quarter 1 : April , May , June</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemQuarterClick("Quarter 2 : July , August , September")}>Quarter 2 : July , August , September</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemQuarterClick("Quarter 3 : October , November , December")}>Quarter 3 : October , November , December</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemQuarterClick("Quarter 4 : January , Febuary , March")}>Quarter 4 : January , Febuary , March</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
              <FloatingLabel className="mb-3" controlId="floatingPassword" label="Year">
                <Form.Control size='sm' type="text" placeholder="Password" />
              </FloatingLabel>
              <FloatingLabel className="mb-3" controlId="floatingPassword" label="Country">
                <Form.Control size='sm' type="text" placeholder="Password" />
              </FloatingLabel>
              <FloatingLabel className="mb-3" controlId="floatingPassword" label="Address">
                <Form.Control size='sm' type="text" placeholder="Password" />
              </FloatingLabel>
              <FloatingLabel className="mb-3" controlId="floatingPassword" label="Phone Number">
                <Form.Control size='sm' type="text" placeholder="Password" />
              </FloatingLabel>
              <FloatingLabel className="mb-3" controlId="floatingPassword" label="Email Address">
                <Form.Control size='sm' type="text" placeholder="Password" />
              </FloatingLabel>
              <FloatingLabel className="mb-3" controlId="floatingPassword" label="Number Of Employees">
                <Form.Control size='sm' type="text" placeholder="Password" />
              </FloatingLabel>
            </div>
            <div className="col-md-4 ">
              <div><h3 className='subTitle'>Project Type:</h3>
                <p>When inquiring about the 'Project Type,' we seek clarification on the classification or categoryof the initiative in question. Kindly specify the nature
                  of your involvement, whether it pertains to a Management Facility.
                  a Material Factory,a Restaurant, or other distinct environmental projects. Your response will assist us in better understanding the primary focus or purpose of your sustainability initiative.
                </p>
              </div>
              <img className='w-100' src={process.env.PUBLIC_URL + '/Imgs/1.jpg'} alt="imgOne" />
              <div><h3 className='subTitle'>Quarter:</h3>
                <p>When selecting the quarter for calculating CO2 emissions.
                  of your activities, consider it as a vital step towards precision. By specifying
                  the exact timeframe you enable us to provide more accurate and relevant calculations. Whether it's the first quarter of the year or any other specific timeframe. choosing the right quarter ensures that your carbon footprint assessment reflects the nuances of your environmental impact during that period.
                </p>
              </div>
            </div>
            <div className="col-md-4 ">
              <img className='w-100' src={process.env.PUBLIC_URL + "/Imgs/2.jpg"} alt="imgTwo" />
              <div><h3 className='subTitle'>Project Stage:</h3>
                <p>When discussing the 'project stage,' we are seeking insight into the present developmental phase of your initiative. Kindly specify whether your project is in the design, construction, or another distinct stage. This detail allows us to offer tailored assistance and guidance that aligns with the specific requirements of your sustainability project.
                </p>
              </div>
              <img className='w-100' src={process.env.PUBLIC_URL + "/Imgs/3.jpg"} alt="imgThree" />
            </div>
            <div className="col-md-12 mt-3">
              {isLoading ? (
                <div className="spinner-border" role="status">
                </div>
              ) : (
                <button type="submit" onClick={handleClick} className="btn btn-primary">Submit</button>)}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default ProjectsInformation;