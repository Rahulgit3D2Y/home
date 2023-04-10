import React from 'react'
import Rooms_type from './subpages/Rooms_type'


 const roomDetail=[
  {
    img:"https://source.unsplash.com/1500x700/?Room",
  type:"Single Room",
  detail:"aaaaaaaaaaaaaaaaaaa aa a",
 },
 {
  img:"https://source.unsplash.com/1500x700/?Hotel room",
  type:"Double Room",
  detail:"bbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
 },
 {
  img:"https://source.unsplash.com/1500x700/?Apartment",
  type:"Triple Room",
  detail:"cccccccccccccccccccccccccccccc",
 },
 {
  img:"https://source.unsplash.com/1500x700/?Flat",
  type:"Flat",
  detail:"dddddddddddddddddddddddddddddddddddddddd",
 },
];
const Rooms = () => {
  return (
    <div className="container py-5">
        <h1>Rooms Provided</h1>
        <div className="container">
            <div className="row g-4">
              <div className="col-md-6">
                <Rooms_type name={roomDetail[0].type} detail={roomDetail[0].detail} img={roomDetail[0].img}/>
              </div>
              <div className="col-md-6">
                <Rooms_type name={roomDetail[1].type} detail={roomDetail[1].detail}img={roomDetail[1].img}/>
              </div>
              <div className="col-md-6">
                <Rooms_type name={roomDetail[2].type} detail={roomDetail[2].detail}img={roomDetail[2].img}/>
              </div>
              <div className="col-md-6">
                <Rooms_type name={roomDetail[3].type} detail={roomDetail[3].detail}img={roomDetail[3].img}/>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Rooms