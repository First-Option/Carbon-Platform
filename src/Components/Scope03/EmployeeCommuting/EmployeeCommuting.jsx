import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Pie } from 'react-chartjs-2';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function EmployeeCommuting() {
  const [calculations, setCalculations] = useState(Array(23).fill(0));
  const [factors, setFactors] = useState(Array(23).fill(0));
  const [chartData, setChartData] = useState();
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

    localStorage.setItem('EmployeeCommutingData', JSON.stringify(savedData));
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
    const savedData = localStorage.getItem('EmployeeCommutingData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setCalculations(parsedData.calculations);
      setTotalConsumption(parsedData.totalConsumption);
      console.log(parsedData.factors );
      setFactors(parsedData.factors || Array(10).fill(1.07)); // Set default factors if not present
      setConsumptions(parsedData.Consumptions)
    }
  }, []);

  const toggleEditMode = () => {

    setIsEditMode(!isEditMode);
  };

  const rowsData = [
    { id: 1, label: 'Small Petrol Car: < 1400 cc', factor: 1.07 },
    { id: 2, label: 'Medium Petrol Car: 1400 - 2000 cc', factor: 1.07 },
    { id: 3, label: 'Large Petrol Car: > 2000 cc', factor: 1.07 },
    { id: 4, label: 'Average Petrol Car: Unknown engine', factor: 1.07 },
    { id: 5, label: 'Medium Petrol Hybrid Car: 1400 - 2000 cc', factor: 1.07 },
    { id: 6, label: 'Large Petrol Hybrid Car: > 2000 cc', factor: 1.07 },
    { id: 7, label: 'Small Diesel Car: < 1700 cc', factor: 1.07 },
    { id: 8, label: 'Medium Diesel Car: 1700 - 2000 cc', factor: 1.07 },
    { id: 9, label: 'Large Diesel Car: > 2000 cc', factor: 1.07 },
    { id: 10, label: 'Average Diesel Car: Unknown engine', factor: 1.07 },
    { id: 11, label: 'Medium LPG Car', factor: 1.07 },
    { id: 12, label: 'Large LPG Car', factor: 1.07 },
    { id: 13, label: 'Unknown LPG Car', factor: 1.07 },
    { id: 14, label: 'Unknown Fuel Car', factor: 1.07 },
    { id: 15, label: 'Small Motorbike: < 125 cc', factor: 1.07 },
    { id: 16, label: 'Medium Motorbike: 125 - 500 cc', factor: 1.07 },
    { id: 17, label: 'Large Motorbike: > 500 cc', factor: 1.07 },
    { id: 18, label: 'Local Bus', factor: 1.07 },
    { id: 19, label: 'National Coach', factor: 1.07 },
    { id: 20, label: 'National Rail', factor: 1.07 },
    { id: 21, label: 'Underground', factor: 1.07 },
    { id: 22, label: 'Tram/ Light Rail', factor: 1.07 },
    { id: 23, label: 'Taxi', factor: 1.07 }
  ];
  // useEffect(()=>{
  //   const FactorsArray = rowsData.map(R=>R.factor);
  //   setFactors(FactorsArray)
  
  // },[])
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
            factors[index] == 0 ? rowData.factor : factors[index]
          )}
        </td>
        <td>{rowData.unit}</td>
        <td>{calculations[index]}</td>
      </tr>
    ));
  };
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
            <Table className='' striped bordered hover variant="secondary">
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
              <tbody>{renderRows()}</tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>-</td>
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
  );
}
