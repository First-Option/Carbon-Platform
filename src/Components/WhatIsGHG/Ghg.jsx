import React from 'react'
import "./Ghg.css"
export default function Ghg() {
    return (
        <>
            <div className='container ghgContainer'>
                <div className="row">
                    <div className="mt-5">
                        <h3>What are greenhouse gases?</h3>
                        <h5>Greenhouse gases (also known as GHGs) are gases in the Earth’s atmosphere that trap heat.</h5>
                        <p>During the day, the sun shines through the atmosphere, warming the Earth’s surface. At night, the Earth's surface cools, releasing heat back into the air. But some of the heat is trapped by the greenhouse gases in the atmosphere. That's what keeps the Earth’s temperature at an average 14˚C (57˚F).</p>
                    </div>
                </div>
     
                <div className="row">
                    <div className=" mt-5">
                        <h3>Greenhouse gases and the greenhouse effect</h3>
                        <h5>The gases act like the glass walls of a greenhouse – hence the name, greenhouse gases. Without this greenhouse effect, temperatures would drop to as low as -18˚C (-0.4˚F); too cold to sustain life on Earth.</h5>
                        <p>But human activities are changing the Earth's natural greenhouse effect with a dramatic increase in the release of greenhouse gases. Scientists agree greenhouse gases are the cause of global warming and climate change.</p>
                        <p>Since the Industrial Revolution, humans have been releasing larger quantities of greenhouse gases into the atmosphere. In the past century, that amount has increased dramatically, with the knock-on effect of global warming. Global temperatures have accelerated in the past 30 years and are now the highest since records began.</p>
                    </div>
                </div>
         
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <h2>What are the main greenhouse gases?</h2>
                        <h5>Carbon dioxide (CO2)</h5>
                        <p>CO2 is released through natural processes, such as volcanic eruptions, plant respiration, and animals and humans breathing. But <p className='text-success'>the atmospheric CO2 concentration has increased by 50%</p> since the Industrial Revolution began in the 1800s, due to human activities like the burning of fossil fuels and large-scale deforestation. Due to its abundance, CO2 is the main contributor to climate change.</p>
                        <h5>Methane</h5>
                        <p>Methane is produced naturally through decomposition. But again, human activity has displaced the natural balance. Large amounts of methane are released by cattle farming, landfill waste dumps, rice farming, and the traditional production of oil and gas.</p>
                        <h5>Nitrous oxide</h5>
                        <p>Nitrous oxide is produced through the large-scale use of commercial and organic fertilizers, fossil-fuel combustion, nitric-acid production, and biomass burning.</p>
                        <h5>Water vapour</h5>
                        <p>Water vapour is the most abundant greenhouse gas. It increases as the Earth's atmosphere warms but unlike CO2, which can remain in the Earth’s atmosphere for centuries, water vapour persists for only a few days.</p>
                        <h5>Natural and man-made GHGs</h5>
                        <p>The group of gases detailed above are naturally produced, but their increasing atmospheric concentration is man-made.</p>
                        <p>In contrast, the three industrial fluorinated gases – hydrofluorocarbons (HFC), perfluorocarbons (PFC), and sulphur hexafluoride (SF6) – are solely man-made during industrial processes and do not occur in nature. Though they are present in very small concentrations in the atmosphere, they trap heat very effectively, meaning they are extremely potent.</p>
                        <p>SF6, which is used in high-voltage electricity equipment, has a ‘Global Warming Potential’ 23,000 times greater than CO2.</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={process.env.PUBLIC_URL +"/Imgs/GHG.jpg"} alt="Description of the image" className="img-fluid w-100" />
                    </div>
                </div>
        
                <div className="row">
                    <div className=" mt-5">
                        <h3>What can be done to reduce greenhouse gases?</h3>
                        <h5>Greenhouse gases can be reduced by phasing out fossil fuels, such as coal, oil, and gas, and moving to renewable energy, such as solar and wind.</h5>
                        <p>We can all play a part in protecting our planet, from simple daily changes, like reusing and recycling, to bigger lifestyle decisions like switching to electric vehicles.</p>
                    </div>
                </div>
           
                <div className="row">
                    <div className="mt-5">
                        <h3>What are we doing to reduce greenhouse gases at National Grid?</h3>
                        <h5>We are committed to achieving net zero by 2050. Helping society to decarbonize is the biggest contribution we can make to the environment.</h5>
                        <p>This means working towards the connection of low-carbon, renewable energy sources across the UK and US, and achieving the technical capability of operating a zero-carbon electricity system.</p>
                        <p>We're proud of what we've achieved to date, but there is much more we can do. We believe we have a responsibility to lead the way and help drive emissions down across the energy sector and have a strategy to do this.</p>
                        <h5>Our Climate Transition Plan outlines some of the key near-term actions we're undertaking to reach our GHG reduction targets. For example:</h5>
                        <ul>
                            <li>We're planning to halve emissions across the Group by 2030 (from 2016) and reduce them to zero by 2050, limiting our use of external offsets to get there.</li>
                            <li>We're reducing SF6 emissions from our global operation by 50% by 2030, through leak identification and repair, as well as investment in SF6 alternatives.</li>
                            <li>We'll continue to efficiently connect renewables and to build interconnectors, supporting wider decarbonization of electricity markets.</li>
                            <li>We'll continue to grow our renewable generation business in the US over the coming decade, which will significantly lower the overall intensity of our generation portfolio.</li>
                            <li>We'll move to a 100% electric fleet by 2030 for our light-duty vehicles.</li>
                            <li>We'll continue innovation in nation-leading energy efficiency programs for our customers.</li>
                            <li>We'll invest in network modernization to reduce fugitive natural gas emissions and increase safety and reliability.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
    
}
