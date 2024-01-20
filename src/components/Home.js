import React from 'react'
import Navbar from './Navbar'
import Welcome from './Welcome'
import App from '../App'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='space'/>
      <div className='box'>
      <Welcome/>
      </div>
    </div>
  )
}

export default Home
