import React from 'react'
import { Outlet } from 'react-router-dom'
import NavScroll from '../Components/NavScroll/NavScroll'
import Sidebar from '../Components/Sidebar/Sidebar'


export default function MainLayout() {
  return (
    <>
      <NavScroll />
      <Outlet />
    </>
  )
}
