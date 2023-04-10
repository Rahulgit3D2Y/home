import React from 'react'

const Rooms_type = (props) => {
  return (
    <div className="card">
                  <div>
                    <img src={props.img} className="img-fluid card-bg-img rounded" alt=""/>
                  </div>
                  <div className="card-img-overlay text-white">
                    <h1 className="card-title">{props.name}</h1>
                     <h4 className="card-text">{props.detail}</h4>
                  </div>
                </div>
  )
}

export default Rooms_type