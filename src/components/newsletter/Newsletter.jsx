import React from 'react'
import "./newsletter.css"


const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay update</p>
      <div>
        <input type="email" placeholder='your email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
