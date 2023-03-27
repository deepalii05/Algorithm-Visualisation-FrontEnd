import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Get In Touch</h2>
        <p className='contactpara'> I'm looking to positions as a front-end developer or work extensively with deep learning and machine learning. If you have any additional questions or simply want to say hello, we may talk about artificial intelligence and related research. I'll do my best to get back to you.</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("mailto:deepaliithakurr@gmail.com");
          }}
        >Say Hello</button>
        <span></span>
        {/* <hr className='line' />
        <p className='copyright'>© Copyright 2023.
        <br /> 
        Designed & Built by <span>rahulvijay</span></p> */}
      </Container>
    </div>
  )
}

export default Contactpage