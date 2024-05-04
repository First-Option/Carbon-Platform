import React, { useState, useEffect } from 'react';
import { Container,Button  } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function WellToTankFuels() {
  const [calculations, setCalculations] = useState(Array(21).fill(0));
  const[factors,setFactors] = useState(Array(21).fill(0));
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

    localStorage.setItem('WellToTankFuelsData', JSON.stringify(savedData));
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
    const savedData = localStorage.getItem('WellToTankFuelsData');
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
    { id : 1, label : "Butane",factor:1.07, unit : "Litres" },
    { id : 2, label : "CGN",factor:1.07, unit : "Litres" },
    { id : 3, label : "LNG",factor:1.07, unit : "Litres" },
    { id : 4, label : "LPG",factor:1.07, unit : "Litres" },
    { id : 5, label : "Natural Gas",factor:1.07, unit : "m³" },
    { id : 6, label : "Natural Gas (100% mineral blend)",factor:1.07, unit : "m³" },
    { id : 7, label : "Other petroleum gas",factor:1.07, unit : "Litres" },
    { id : 8, label : "Propane",factor:1.07, unit : "Litres" },
    { id : 9, label : "Aviation spirit",factor:1.07, unit : "Litres" },
    { id : 10, label : "Aviation turbine fuel",factor:1.07, unit : "Litres" },
    { id : 11, label : "Burning Oil",factor:1.07, unit : "Litres" },
    { id : 12, label : "Diesel (Average biofuel blend)",factor:1.07, unit : "Litres" },
    { id : 13, label : "Diesel (100% mineral diesel)",factor:1.07, unit : "Litres" },
    { id : 14, label : "Fuel Oil",factor:1.07, unit : "Litres" },
    { id : 15, label : "Gas Oil",factor:1.07, unit : "Litres" },
    { id : 16, label : "Petrol (Average biofuel blend)",factor:1.07, unit : "Litres" },
    { id : 17, label : "Petrol (100% mineral diesel)",factor:1.07, unit : "Litres" },
    { id : 18, label : "Processed fuel oils - residual oil",factor:1.07, unit : "Litres" },
    { id : 19, label : "Processed fuel oils - distillate oil",factor:1.07, unit : "Litres" },
    { id : 20, label : "Marine gas oil",factor:1.07, unit : "Litres" },
    { id : 21, label : "Marine fuel oil",factor:1.07, unit : "Litres" }
    
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
            factors[index]==0?rowData.factor:factors[index]
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
  console.log(factors);
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
                  <td>Totals</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Litres</td>
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
            {chartData && <Pie data={chartData}  />}
          </Col>

        </Row>
      </Container>
    </div>
  );
}
