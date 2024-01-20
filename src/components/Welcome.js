import React from 'react'
import quote from './quote.png'
import App from '../App'



const Welcome = () => {
  return (
    <div className='welcome bounceIt'>
      <h2 className='wText'>Welcome!</h2>
      <div className='quote'>
      <p style={{fontSize:'1.2vw'}}>❝ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et arcu sit amet urna fringilla luctus id sit amet nunc. Aliquam erat volutpat. Etiam semper, nibh at varius sollicitudin, nunc eros tristique mi, sed luctus nunc massa et orci. ❞</p> <img className='mypic' src={quote} alt='picture of owner'/></div>

  <button className='book' ><a className='nF links' style={{fontSize:'1.3vw'}} href='https://calendly.com/setpascal27/consultation'>Book A Consultation For Free!</a></button>
    </div>
  )
}

export default Welcome
