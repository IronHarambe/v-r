import React from 'react'

import "./ShowCase.scss"

function ShowCase({title, dec, img}) {
    return (
       <div className="showcase">
           <img src={img} alt="showcase"/>
           <h2>{title}</h2>
       </div>
    )
}

export default ShowCase
