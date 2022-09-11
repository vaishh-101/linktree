import React from 'react'
import './linkcard.css'
import Linkedin from './../img/LinkedIn1.jpg'
import Twitter from './../img/twitter.png'
import Github from './../img/github1.png'
import Insta from './../img/insta.jpg'
import Snap from './../img/snap.png'

const ImgMap = {
  "Twitter": Twitter,
  "Github" : Github,
  "Linkedin": Linkedin,
  "Insta": Insta,
  "Snap" : Snap
}

function linkcard(props) {
  return (
    <div className={`link-card bg-${props.title}`}>
<a href={props.link} className= "hyperlink">
      <div className="container-linkhandler">
    <div>
      <img src={ImgMap[props.title]} className="card-img"/>
      </div>
    <div className="handle-name">
      <h3 className="username">{props.username}</h3>
      </div>
</div>

<div className="handle-des">
<p>{props.tagline}</p>

</div>
</a>
    </div>
  
    
  )
}

export default linkcard;