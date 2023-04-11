import React from 'react'
import Service_provided from './subpages/Service_provided'

const ser_pro=[
    {
        img:"https://source.unsplash.com/1000x700/?room",
        title:'aaaaaaaaaaaaaaaaa',
        detail:'bbbbbbbbbbbbbb',
    },
    {
        img:"https://source.unsplash.com/1000x700/?motel",
        title:'ccccccccccc',
        detail:'ddddddddddddddddddddd',
    },
];
const Services = () => {
  return (
    <div className='container py-5'>
        <h1>Services provided</h1>
        <div className="py-5">
            <div className="row g-5">
              <div className="col-md-6">
                <Service_provided title={ser_pro[0].title} detail={ser_pro[0].detail} img={ser_pro[0].img}/>
              </div>
              <div className="col-md-6">
                <Service_provided title={ser_pro[1].title} detail={ser_pro[1].detail}img={ser_pro[1].img}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services