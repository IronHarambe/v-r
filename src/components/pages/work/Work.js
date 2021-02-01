import React from 'react'
import ShowCase from './showcase/ShowCase'

import "./Work.scss"

function Work() {
    return (
      <div className="work">
          <div className="work__banner">
             <h2>Our Work!</h2>
          </div>

          <h2 className="midtext">Check out our Portfolio</h2>

          <div className="work__showcase">
          <ShowCase 
          title="Ancient Egypt "
          img="/img/showcase/egypt.jpg"
          dec="Immersive VR simulation of Ancient Egypt"
          ></ShowCase>

<ShowCase 
          title="Digital Arcade "
          img="/img/showcase/enter.jpeg"
          dec="A Digital arcade recreated in VR"
          ></ShowCase>

<ShowCase 
          title="Castle VR "
          img="/img/showcase/castle.jpg"
          dec="Transforms boring old houses into AR castles!"
          ></ShowCase>

<ShowCase 
          title="VR Bike Ride "
          img="/img/showcase/bike.jpg"
          dec="Immersive VR simulation of futuristic bike rides"
          ></ShowCase>

          </div>
      </div>
    )
}

export default Work
