import React from 'react'
import { Link } from 'react-router-dom';
const Link_ = () => {
  return (
    <div className="nav d-flex justify-content-around bg-light py-3 ">
                <Link to='/'><div className='btn btn-lg '>link1</div></Link>
                <Link to='/Sub2'><div className='btn btn-lg '>link2</div></Link>
                <Link to='/Sub3'><div className='btn btn-lg'>link3</div></Link>
    </div>
  )
}

export default Link_