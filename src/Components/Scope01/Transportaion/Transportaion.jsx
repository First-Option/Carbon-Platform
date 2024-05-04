import React, { useState, useEffect } from 'react';
import { Container,Button  } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Transportaion() {

  const [calculations, setCalculations] = useState(Array(20).fill(0))
  const [chartData, setChartData] = useState();
  const [factors, setFactors] = useState(Array(21).fill(0));
  const [isEditMode, setIsEditMode] = useState(false);
  const [totalConsumption, setTotalConsumption] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [Consumptions,setConsumptions] = useState();


  const handleInputChange = (e, index) => {
    const newValue = e.target.value;
    const updatedCalculations = [...calculations];
    updatedCalculations[index] = newValue * factors[index]; // Update the calculation logic as needed
    setCalculations(updatedCalculations);

    // Calculate the total consumption
    const total = updatedCalculations.reduce((sum, calculation) => sum + calculation, 0);
    setTotalConsumption(total);
  };

  //function to change factor 
  const handleFactorChange = (e, index) => {
    const value = e.target.value;
    const newFactors = [...factors];
    newFactors[index] = value;

    // Update the factors state
    setFactors(newFactors);
    const updatedCalculations = [...calculations];
    updatedCalculations[index] = value * factors[index]; // Update the calculation logic as needed
    setCalculations(updatedCalculations);

  };

  //save data 
  const handleSubmit = () => {
    // Calculate consumption values
 const consumptions = calculations.map((calculation, index) => {
   // Ensure factors[index] is not 0 to avoid division by zero
   const factor = parseFloat(factors[index]) || 1; // Parse factor to float, default to 1 if NaN
   return calculation / factor;
 });
 // Extract labels from rowsData
 const labels = rowsData.map(row => row.label);
   // Save data to local storage
   const savedData = {
     calculations: calculations,
     totalConsumption: totalConsumption,
     factors: factors, // Optionally, you can save factors too
     Consumptions:consumptions, 
     labels: labels // Save labels
   };

   localStorage.setItem('transportaionData', JSON.stringify(savedData));
   setLoading(true);
   setTimeout(() => {
     setLoading(false);
     // Redirect to another page after the loading screen
     alert("Data Saved Successfully")
   }, 2000);
   setIsEditMode(false); // Exit edit mode after saving
 };


  useEffect(() => {
    // Load saved data from local storage
    
    const savedData = localStorage.getItem('transportaionData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setCalculations(parsedData.calculations);
      setTotalConsumption(parsedData.totalConsumption);
      console.log(parsedData.factors);
      setFactors(parsedData.factors || Array(21).fill(1.07)); // Set default factors if not present
      setConsumptions(parsedData.Consumptions)
      console.log('parsedData.factors');

    }
  }, []);
const toggleEditMode = () => {
    
  setIsEditMode(!isEditMode);
};


// useEffect(() => {
//   const FactorsArray = rowsData.map(R => R.factor);
//   setFactors(FactorsArray)

// }, [])
  const rowsData = [
    { id: 1, label: 'Small Petrol Car : < 1400 cc',factor:1.07, unit: 'KWh' },
    { id: 2, label: 'Medium Petrol Car : 1400 - 2000 cc',factor:1.07, unit: 'm³' },
    { id: 3, label: 'HLarge Petrol Car : > 2000 cc',factor:1.07, unit: 'kWh' },
    { id: 4, label: 'Average Petrol Car : Unkown engine',factor:1.07, unit: 'Ton of refrigeration' },
    { id: 5, label: 'Medium Petrol Hybrid Car : 1400 - 2000 cc',factor:1.07, unit: 'm³' },
    { id: 6, label: 'Large Petrol Hybrid Car : > 2000 cc',factor:1.07, unit: 'm³' },
    { id: 7, label: 'Small Diesel Car : < 1700 cc',factor:1.07, unit: 'm³' },
    { id: 8, label: 'Medium Diesel Car : 1700 - 2000 cc',factor:1.07, unit: 'm³' },
    { id: 9, label: 'Large Diesel Car : > 2000 cc',factor:1.07, unit: 'm³' },
    { id: 10, label: 'Average Diesel Car : Unkown engine',factor:1.07, unit: 'm³' },
    { id: 11, label: 'Meduim LPG Car',factor:1.07, unit: 'm³' },
    { id: 12, label: 'Large LPG Car',factor:1.07, unit: 'm³' },
    { id: 13, label: 'Unknown LPG Car',factor:1.07, unit: 'm³' },
    { id: 14, label: 'Unknown Fuel Car',factor:1.07, unit: 'm³' },
    { id: 15, label: 'Small Motorbike : < 125 cc',factor:1.07, unit: 'm³' },
    { id: 16, label: 'Medium Motorbike: 125 - 500 cc',factor:1.07, unit: 'm³' },
    { id: 17, label: 'Large Motorbike: > 500 cc',factor:1.07, unit: 'm³' },
    { id: 18, label: 'Local Bus',factor:1.07, unit: 'm³' },
    { id: 19, label: 'National Coach',factor:1.07, unit: 'm³' },
    { id: 20, label: 'National Rail',factor:1.07, unit: 'm³' },
    { id: 21, label: 'Underground',factor:1.07, unit: 'm³' },
    { id: 22, label: 'Tram/ Light Rail',factor:1.07, unit: 'm³' },
    { id: 23, label: 'Taxi',factor:1.07, unit: 'm³' },
  ]


  const renderRows = () => {

    if (!Array.isArray(rowsData)) {
      return null; // or an appropriate fallback if rowsData is not available
    }
    return rowsData.map((rowData, index) => (
      <tr key={rowData.id}>
        <td>{rowData.id}</td>
        <td>{rowData.label}</td>
        <td>
          <Form.Control
            size='sm'
            type="text"
            placeholder="0"
            onChange={(e) => handleInputChange(e, index)}
            value={calculations[index] / (factors[index] || 1)} // Display the consumption value
          />
       
        </td>
        <td>
          {isEditMode ? (
            <Form.Control
              size='sm'
              type="text"
              placeholder="0"
              value={factors[index]}
              onChange={(e) => handleFactorChange(e, index)}
            />
          ) : (
            factors[index]
          )}
        </td>
        <td>{rowData.unit}</td>
        <td>{calculations[index]}</td>
      </tr>
    ));
  }
  const itemColors = [
    'red', 'blue', 'green', 'orange', 'purple', // Add more colors as needed
    'yellow', 'pink', 'cyan', 'magenta', 'teal',
    'lime', 'brown', 'gray', 'indigo', 'violet',
    'lavender', 'amber', 'olive', 'coral', 'navy',
    'maroon', 'rose', 'crimson', 'gold', 'silver',
  ];

  useEffect(() => {
    if (!Array.isArray(calculations)) return;

    setChartData({
      labels: rowsData.map((rowData) => rowData.label),
      datasets: [
        {
          data: calculations,
          backgroundColor: itemColors.slice(0, rowsData.length),
          borderWidth: 1,
        },
      ],
    });
  }, [calculations]);
  return (
    <div className='m-4 '>
      <Container fluid  >
        <Row>
          <Col md={{ span: 6, offset: 0 }} className='customTable'>
            <Table striped bordered hover variant="secondary">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Utility</th>
                  <th>Consumption</th>
                  <th>Factor</th>
                  <th>Unit</th>
                  <th>Tons CO2</th>
                </tr>
              </thead>
              <tbody>
                {renderRows()}
              </tbody>
              <tfoot>
                <tr>
                  <td>Toatal</td>
                  <td >-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>{totalConsumption}</td>
                </tr>
              </tfoot>
            </Table>
           
            <div className="col-md-12 mt-3">
              <div>
                <Button onClick={toggleEditMode} variant={isEditMode ? 'success' : 'primary'}>
                  {isEditMode ? 'Save Factors' : 'Edit Factors'}
                </Button>
              </div>
              <div className='mt-2'>
              {isLoading ? (
                <div className="spinner-border" role="status">
                </div>
              ) : (
                <button type="submit" onClick={handleSubmit} className="btn btn-danger ">Submit Data</button>)}
              </div>
            </div>
           


          </Col>
          <Col className=' d-flex justify-content-center align-items-center bg-light customPie' md={6}>
            {chartData && <Pie data={chartData} />}

          </Col>

        </Row>
      </Container>
    </div>
  )
}
