import React from 'react'
import { Route,Routes,Link } from 'react-router-dom';
import Sub1 from './subpages/Sub1';
import Sub2 from './subpages/Sub2';
import Sub3 from './subpages/Sub3';
import Link_ from './Link_';
const Hero = () => {
  return (
    <div className=' bg-dark home '>
        <div className="row">
          <div className="col-md-6 my-5">
            <div className="container bg-white something">
              <Link_/>
              <div className="container">
                <Routes>
                  <Route path='/'element={<Sub1/>}/>
                  <Route path="/Sub2" element={<Sub2/>}/>
                  <Route path="/SUB3" element={<Sub3/>}/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero