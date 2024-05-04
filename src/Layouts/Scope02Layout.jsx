import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';

import { Outlet } from 'react-router-dom';

import Scope02 from '../Components/Scope02/Scope02';



export default function Scope02Layout() {

    return (
        <>
            <Scope02/>
            <Outlet/>
        </>
    )
}
