
import './App.css';
import ProjectsInformation from './Components/ProjectsInformation/ProjectsInformation.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import { RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Scope01 from './Components/Scope01/Scope01.jsx';
import Scope02 from './Components/Scope02/Scope02.jsx';
import Scope03 from './Components/Scope03/Scope03.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Co2Emissions from './Components/Co2Emissions/Co2Emissions.jsx';
import ScopesDefinition from './Components/ScopesDefinition/ScopesDefinition.jsx';
import Ghg from './Components/WhatIsGHG/Ghg.jsx';
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';

import Scope01Layout from './Layouts/Scope01Layout.jsx';
import Scope02Layout from './Layouts/Scope02Layout.jsx';
import Scope03Layout from './Layouts/Scope03Layout.jsx';
import Fuels from './Components/Scope01/Fuels/Fuels.jsx';
import Bioenergy from './Components/Scope01/Bioenergy/Bioenergy.jsx';
import Transportation from './Components/Scope01/Transportaion/Transportaion.jsx';
import ElectricityHeatCooling from './Components/Scope02/ElectricityHeatCooling/ElectricityHeatCooling.jsx';

import WellToTankFuels from './Components/Scope03/WellToTankFuels/WellToTankFuels.jsx'
import Water from './Components/Scope03/Water/Water.jsx'
import MaterialUse from './Components/Scope03/MaterialUse/MaterialUse.jsx'
import WasteDisposal from './Components/Scope03/WasteDisposal/WasteDisposal.jsx'
import EmployeeCommuting from './Components/Scope03/EmployeeCommuting/EmployeeCommuting.jsx'
import Food from './Components/Scope03/Food/Food.jsx'
import Scope03Board from './Components/Scope03/Scope03Board/Scope03Board.jsx';
import Scope01Board from './Components/Scope01/Scope01Board/Scope01Board.jsx';
import Scope02Board from './Components/Scope02/Scope02Board/Scope02Board.jsx';


export default function App() {
  const routes = createBrowserRouter(
    [
      {
        path: '',
        element: <MainLayout />,
        children: [
          { index: 'Carbon-Platform', element: <Home /> },
          { path: 'Carbon-Platform', element: <Home /> },
          { path: 'Home', element: <Home /> },
          { path: 'ProjectsInformation', element: <ProjectsInformation /> },
          { path: 'ScopesDefinition', element: <ScopesDefinition /> },
          {
            path: 'Scope01', element: <Scope01Layout />,
            children: [
              { index:'Scope01Board', element: <Scope01Board/> },
              { path:'Scope01Board', element: <Scope01Board/> },
              { path: 'Fuels', element: <Fuels /> },
              { path: 'Bioenergy', element: <Bioenergy /> },
              { path: 'Transportation', element: <Transportation /> },
            ]
          },
          {
            path: 'Scope02', element: <Scope02Layout/>,

            children: [
              { index: 'Scope02Board', element: <Scope02Board/> },
              { path: 'Scope02Board', element: <Scope02Board/> },
              { path: 'ElectricityHeatCooling', element: <ElectricityHeatCooling/> },
            
            ]
          },
          { path: 'Scope03', element: <Scope03Layout/> ,
            children:[
            { index:'Scope03Board', element: <Scope03Board/> },
            { path:'Scope03Board', element: <Scope03Board/> },
            { path: 'WellToTankFuels', element: <WellToTankFuels/> },
            { path: 'Water', element: <Water/> },
            { path: 'MaterialUse', element: <MaterialUse/> },
            { path: 'WasteDisposal', element: <WasteDisposal/> },
            { path: 'EmployeeCommuting', element: <EmployeeCommuting/> },
            { path: 'Food', element: <Food/> },
          ]

        },
          { path: 'Dashboard', element: <Dashboard/> },
          { path: 'Co2Emissions', element: <Co2Emissions /> },
          { path: 'Ghg', element: <Ghg /> },
          { path: 'About', element: <About /> },
          { path: 'Report', element: <Contact /> },

        ]
      }
    ]
  )
  return (
    <>
      <div className='routes'>
        <RouterProvider router={routes} />
      </div>
    </>
  );
}


