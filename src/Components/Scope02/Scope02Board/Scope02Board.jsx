import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Pie } from 'react-chartjs-2';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Scope02Board() {

  const [chartData1, setChartData1] = useState();
  // const [chartData2, setChartData2] = useState();
  // const [chartData3, setChartData3] = useState();

  const [Total1, setTotal1] = useState();
  // const [Total2, setTotal2] = useState();
  // const [Total3, setTotal3] = useState();



  const itemColors = [
    'red', 'blue', 'green', 'orange', 'purple', // Add more colors as needed
    'yellow', 'pink', 'cyan', 'magenta', 'teal',
    'lime', 'brown', 'gray', 'indigo', 'violet',
    'lavender', 'amber', 'olive', 'coral', 'navy',
    'maroon', 'rose', 'crimson', 'gold', 'silver',
  ];


  useEffect(() => {
    const savedData = localStorage.getItem('ElectricityHeatCooling');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    if (!Array.isArray(parsedData.calculations)) return;

    setChartData1({

      labels: parsedData.labels.map((rowData) => rowData),
      datasets: [
        {
          data: parsedData.calculations,
          backgroundColor: itemColors.slice(0, parsedData.labels.length),
          borderWidth: 1,
        },
      ],
    });
    setTotal1(parsedData.totalConsumption)
  }
  }, []);

  // useEffect(() => {
  //   const savedData = localStorage.getItem('bioenergyData');
  //   const parsedData = JSON.parse(savedData);
  //   if (!Array.isArray(parsedData.calculations)) return;

  //   setChartData2({

  //     labels: parsedData.labels.map((rowData) => rowData),
  //     datasets: [
  //       {
  //         data: parsedData.calculations,
  //         backgroundColor: itemColors.slice(0, parsedData.labels.length),
  //         borderWidth: 1,
  //       },
  //     ],
  //   });
  //   setTotal2(parsedData.totalConsumption)
  // }, []);


  // useEffect(() => {
  //   const savedData = localStorage.getItem('transportaionData');
  //   const parsedData = JSON.parse(savedData);
  //   if (!Array.isArray(parsedData.calculations)) return;

  //   setChartData3({

  //     labels: parsedData.labels.map((rowData) => rowData),
  //     datasets: [
  //       {
  //         data: parsedData.calculations,
  //         backgroundColor: itemColors.slice(0, parsedData.labels.length),
  //         borderWidth: 1,
  //       },
  //     ],
  //   });
  //   setTotal3(parsedData.totalConsumption)
  // }, []);

  return (
    <div className='m-4 d-flex justify-content-center align-items-center  bg-light'>
      <Container fluid  >
      <h1>Scope 02 Dashboard Summary :</h1>
        <div className="row">
          <div className='d-flex col-md-6 justify-content-center align-items-center bg-light customPie' md={6}>
            <Container fluid>
              <div className="row">
                  {chartData1 && <Pie data={chartData1} />}
              </div>
              <div className="row mt-3">
                <Col className='d-flex justify-content-center align-items-center bg-light' md={6}>
                  <p><span className='text-success'>Electricity , Heat , Cooling</span> Co2 Emissions in Tons : {Total1}</p>
                </Col>
              </div>
            </Container>
          </div>
          {/* <div className='d-flex col-md-6 justify-content-center align-items-center bg-light customPie' md={6}>
            <Container fluid>
              <div className="row">
                
                  {chartData2 && <Pie data={chartData2} />}
                
              </div>
              <div className="row mt-3">
                <Col className='d-flex justify-content-center align-items-center bg-light' md={6}>
                  <p><span className='text-success'>Bioenergy</span> Co2 Emissions in Tons :  {Total2}</p>
                </Col>
              </div>
            </Container>
          </div>
          <div className='d-flex col-md-6 justify-content-center align-items-center bg-light customPie' md={6}>
            <Container fluid>
              <div className="row">
              
                  {chartData3 && <Pie data={chartData3} />}
                
              </div>
              <div className="row mt-3">
                <Col className='d-flex justify-content-center align-items-center bg-light' md={6}>
                  <p className=''><span className='text-success'>Transportaion</span> Co2 Emissions in Tons :  {Total3}</p>
                </Col>
              </div>
            </Container>
          </div> */}
          <div className='d-flex col-md-6 justify-content-center align-items-center bg-light customPie' md={6}>
            <Container fluid>
            <h1>
              Scope02 Tatal Co2 Emissions = {Total1}
            </h1>
            </Container>
          </div>
        </div>

      </Container>
    </div>
  );
}
