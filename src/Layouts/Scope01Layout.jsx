import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';

import { Outlet } from 'react-router-dom';

import Scope01 from '../Components/Scope01/Scope01';



export default function Scope01Layout() {

    return (
        <>
            <Scope01/>
            <Outlet/>
        </>
    )
}
