import React from 'react'
import "./ContactCard.scss"

function ContactCard({img, title, desc}) {
    return (
       <div className="contact__card">
           <img src={img} alt="icon images"></img>

           <div className="content">
        <h3>{title}</h3>
        <p>{desc}</p></div>
       </div>
    )
}

export default ContactCard
