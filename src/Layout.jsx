import React from 'react'
import Navigationbar from './components/Navigationbar'
import Home from './pages/Home'
import Footer from './components/Footer'

const Layout = ({children}) => {
  return (
    <div className='relative overflow-x-hidden'>
      <Navigationbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
