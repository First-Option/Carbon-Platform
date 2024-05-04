import React from 'react'
import './ScopesDefinition.css'

export default function ScopesDefinition() {
  return (
    <>
      <div className="container definitionContainer">
      <div className="row pt-5">
      <div className="col-md-4">
      <h3>Scope 1 Emissions:</h3>
      <p>Definition: Scope 1 emissions include direct greenhouse gas emissions that originate from sources owned or controlled by the reporting organization. Examples: - Combustion of fossil fuels on-site (e.g.. company-owned vehicles. boilers). - Process emissions from chemical reactions. - Fugitive emissions (e.g.. leaks from equipment). </p>
      <h3>Scope 2 Emissions:</h3>
      <p>Definition: Scope 2 emissions cover indirect greenhouse gas emissions associated with the production of purchased energy consumed by the reporting organization. This includes emissions from the generation of purchased electricity. heat or steam. Examples: - Electricity purchased from a utility. - Heat Or steam purchased from an external source.  </p>
      <h3>Scope 3 Emissions:</h3>
      <p>Scope 3 emissions encompass all other indirect greenhouse gas emissions that occur in the value chain of the reporting organization. both upstream and downstream. These emissions result from activities such as the extraction and production of purchased materials. transportation. waste generation. and the use and end-of-life treatment of products. Examples: - Purchased goods and services. - Business travel. - Employee commuting. - Upstream and downstream transportation and distnbution. - Use of sold products. - Waste Materials.  </p>
      <h3>Key Points:</h3>
      <p>- Responsibility Organizations have varying degrees of control and responsibility over each scope. Scope 1 emissions are considered the most direct and controllable. while Scope 3 emissions are often more challenging to manage due to the broader supply Chain impact. - Comprehensiveness: A comprehensive understanding of all three scopes allows organizations to assess their total carbon footprint and identify opportunities for emissions reduction throughout their value chain. - Reporting: Many sustainability and environmental reports include data on all three scopes to provide a holistic view of an organization's impact on climate change.  </p>
    </div>
        <div className="col-md-8">
          <img src={process.env.PUBLIC_URL + "/Imgs/Scope123Emissions_Infographic.jpg"} alt="Description of the image" className="img-fluid w-100" />
        </div>
      </div>
    </div>
    </>
  )
}
