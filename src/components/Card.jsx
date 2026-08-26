import React from 'react'
import "./Card.css"

const Card = ({img , desc}) => {
  return (
    <div className = "card">
      <img className="card-img" src={img}/>
      <div className="card-desc">
        <p>
            {desc}
        </p>
        <button>Devamı</button>
      </div>
    </div>
  )
}

export default Card