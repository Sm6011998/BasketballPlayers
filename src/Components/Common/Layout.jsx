import React from 'react'
import Navbar from './Navbar'
import { ChildCare } from '@mui/icons-material'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    
    </>
  )
}

export default Layout