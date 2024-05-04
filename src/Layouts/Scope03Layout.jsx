import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';

import { Outlet } from 'react-router-dom';

import Scope03 from '../Components/Scope03/Scope03';



export default function Scope03Layout() {

    return (
        <>
            <Scope03/>
            <Outlet/>
        </>
    )
}
