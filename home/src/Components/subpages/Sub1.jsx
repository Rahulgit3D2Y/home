import React from 'react'

const Sub1 = () => {
  return (
    <div className='container '>
        <form className='Sub1'>
        <h1 className='fw-bold'>Ride</h1>
            <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Location"/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Destination"/>
            </div>
            <div className='d-flex justify-content-around'>
              <button type="submit" className="btn btn-lg btn-dark">Request now</button>
              <button type="submit" className="btn btn-lg btn-secondary">Sededule for later</button>
            </div>
        </form>
    </div>
  )
}

export default Sub1