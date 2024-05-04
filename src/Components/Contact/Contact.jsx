import React from 'react'
import { Container,Button  } from 'react-bootstrap';

export default function Contact() {
  function handleExport() {
 
}

  return (
    <>
    <div className='position-absolute  bg-secondary d-flex align-items-center justify-content-center h-100 w-100' >
        {/* <h1>Export Report</h1> */}
        <a className='btn btn-success' href="data:application/xml;charset=utf-8,your code here" download="First Option Co2 Emissions.pdf">Download Report</a>
    </div>
</>
  )
}
