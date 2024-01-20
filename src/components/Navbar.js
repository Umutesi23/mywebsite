import React from 'react'
import App from '../App'


const Navbar = () => {
  return (
    <div >
      <div class='nav'>
      <button className='btn'><a href='./home' className='links'>Home</a></button>
      <button className='btn'><a href='./portfolio' className='links'>Portfolio</a></button>
      <button className='btn'><a href='./family'className='links'>Family</a></button>
      <button className='btn'><a href='./interests'className='links'>Interests</a></button>
      <button className='btn'><a href='./articles'className='links'>Articles</a></button>
      <button className='btn'><a href='./contacts'className='links'>Contacts</a></button>
    </div>
    </div>
  )
}

export default Navbar
