import React from 'react'

const Service_provided = (props) => {
  return (
    <>
        <div><img src={props.img} className='img-fluid rounded' alt="" /></div>
        <div><h2>{props.title}</h2></div>
        <div><p>{props.detail}</p></div>
    </>
  )
}

export default Service_provided