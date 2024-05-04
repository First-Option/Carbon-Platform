import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';

export default function Dashboard () {
  const [Scope01Calculations, setScope01Calculations] = useState([]);
  const [Scope02Calculations, setScope02Calculations] = useState([]);
  const [Scope03Calculations, setScope03Calculations] = useState([]);
  const [totalCalculations, setTotalCalculations] = useState(0);

  
  const [Total1, setTotal1] = useState();
  const [Total2, setTotal2] = useState();
  const [Total3, setTotal3] = useState();
  const [Total4, setTotal4] = useState();
  const [Total5, setTotal5] = useState();
  const [Total6, setTotal6] = useState();
  const [Total7, setTotal7] = useState();
  const [Total8, setTotal8] = useState();
  const [Total9, setTotal9] = useState();
  const [Total10, setTotal10] = useState();

  useEffect(() => {


    const savedData1 = localStorage.getItem('fuelsData');
    const parsedData1 = JSON.parse(savedData1);
    setTotal1(parsedData1.totalConsumption)

    const savedData2 = localStorage.getItem('bioenergyData');
    const parsedData2 = JSON.parse(savedData2);
    setTotal2(parsedData2.totalConsumption)

    const savedData3 = localStorage.getItem('transportaionData');
    const parsedData3 = JSON.parse(savedData3);
    setTotal3(parsedData3.totalConsumption)


    const savedData4 = localStorage.getItem('ElectricityHeatCooling');
    const parsedData4 = JSON.parse(savedData4);
    setTotal4(parsedData4.totalConsumption)



    

    const savedData5 = localStorage.getItem('WellToTankFuelsData');
    const parsedData5 = JSON.parse(savedData5);
    setTotal5(parsedData5.totalConsumption)

    const savedData6 = localStorage.getItem('WaterData');
    const parsedData6 = JSON.parse(savedData6);
    setTotal6(parsedData6.totalConsumption)

    const savedData7 = localStorage.getItem('MaterialUseData');
    const parsedData7 = JSON.parse(savedData7);
    setTotal7(parsedData7.totalConsumption)

    const savedData8 = localStorage.getItem('WasteDisposalData');
    const parsedData8 = JSON.parse(savedData8);
    setTotal8(parsedData8.totalConsumption)

    const savedData9 = localStorage.getItem('EmployeeCommutingData');
    const parsedData9 = JSON.parse(savedData9);
    setTotal9(parsedData9.totalConsumption)

    const savedData10 = localStorage.getItem('foodData');
    const parsedData10 = JSON.parse(savedData10);
    setTotal10(parsedData10.totalConsumption)

  });


  // Dummy data for illustration, replace it with your actual logic
  const calculateScope01Data = () => {
    return [Total1, Total2, Total3]; // Replace with actual calculations
  };

  const calculateScope02Data = () => {
    return [Total4]; // Replace with actual calculations
  };
  const calculateScope03Data = () => {
    return [Total5,Total6, Total7,Total8,Total9,Total10]; // Replace with actual calculations
  };
  const combineCalculations = () => {
    const total = Scope01Calculations.reduce((acc, val) => acc + val, 0) +
      Scope02Calculations.reduce((acc, val) => acc + val, 0)+Scope03Calculations.reduce((acc, val) => acc + val, 0);
    setTotalCalculations(total);
  };

  useEffect(() => {
    // Calculate fuel data
    const fuelsData = calculateScope01Data();
    setScope01Calculations(fuelsData);

    // Calculate Scope02 data
    const Scope02Data = calculateScope02Data();
    setScope02Calculations(Scope02Data);

   // Calculate Scope03 data
   const Scope03Data = calculateScope03Data();
   setScope03Calculations(Scope03Data);

    combineCalculations(); // Combine total calculations
  }); // Dependency array is empty to run the effect once on component mount

  return (
    <Container fluid>
      <Row>
       <h1 className='mt-2'>Summary :</h1>
        <Col md={6}>
          <div className='d-flex justify-content-center align-items-center bg-light customPie'>
          <h3>Scope 01</h3>
            {Scope01Calculations.length > 0 && (
              <Pie
                data={{
                  labels: ['Fuels', 'Bioenergy', 'Transportaion'],
                  datasets: [
                    {
                      data: Scope01Calculations,
                      backgroundColor: ['red', 'blue', 'green'],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            )}
          </div>
        </Col>
        <Col md={6}>
          <div className='d-flex justify-content-center align-items-center bg-light customPie'>
          <h3>Scope 02</h3>

            {Scope02Calculations.length > 0 && (
              <Pie
                data={{
                  labels: ['Electricity Heat Cooling'],
                  datasets: [
                    {
                      data: Scope02Calculations,
                      backgroundColor: ['red'],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            )}
          </div>
        </Col>
        <Col md={6}>
          <div className='d-flex justify-content-center align-items-center bg-light customPie'>
          <h3>Scope 03</h3>

            {Scope03Calculations.length > 0 && (
              <Pie
                data={{
                  labels: ['WellToTankFuels','Water', 'MaterialUse','WasteDisposal','Employee Commuting', 'Food'],
                  datasets: [
                    {
                      data: Scope03Calculations,
                      backgroundColor: ['red', 'blue', 'green','yellow', 'pink', 'cyan', 'magenta', 'teal',
                      'lime', 'brown', 'gray', 'indigo', 'violet',
                      'lavender', 'amber', 'olive', 'coral', 'navy',],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            )}
          </div>
        </Col>
        <Col md={6}>
          <div className='d-flex justify-content-center align-items-center bg-light customPie'>
          <h3 className='bg-danger text-light'>Total Calculations in Ton For All Project : {totalCalculations} Ton</h3>

           
          </div>
        </Col>
      </Row>

    </Container>
  );
};



