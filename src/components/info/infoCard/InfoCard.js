import React from 'react'

import "./InfoCard.scss"

function InfoCard({title, description, img}) {
    return (
        <div className="info__card">
        <img src={img} alt="icon images"></img>
        <h3>{title}</h3>
        <p>{description}</p>

            
        </div>
    )
}

export default InfoCard
