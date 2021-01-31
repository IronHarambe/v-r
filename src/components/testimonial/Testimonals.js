import React from 'react'


import "./Testimonals.scss"
import Testimonial from './Testimonial/Testimonial'

function Testimonals() {
    return (
        <div className="testimonals">
        {/* Banner */}
       <div className="test__banner">
           <h1>Our Clients Are Always Impressed!  </h1>
       </div>
        
        <h2>Our Client Testimonials</h2>
         
         {/* Testimonials */}
        <div className="testimonial__cards">
       <Testimonial
        desc="I did love this product, t wast valorous.  T didst ev'rything 
        i wanteth t to doth.  I recommendeth this to ev'ryone of mine own collegue!"
        name="William shakespeare"
        img="/img/port/port.jpg"
       ></Testimonial>

<Testimonial
        desc="I wanted to do a annonymous project for my business and V+R made it happen! 
        Great client interaction, very family vibe!"
        name="John Smith"
        img="/img/port/port2.jpg"
       ></Testimonial>

<Testimonial
        desc="I wanted a recreation of Ancient Egypt and V+R majestically delivered the project!
        It felt like I was back in Egypt!"
        name="Cleopatra Philopator "
        img="/img/port/port3.jpg"
       ></Testimonial>

       
     
            
        </div>
            
        </div>
    )
}

export default Testimonals
