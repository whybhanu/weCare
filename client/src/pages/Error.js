import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center" style={{height: "1000px"}}>
            <div className="text-center">
                <img src="https://stories.freepiklabs.com/api/vectors/oops-404-error-with-a-broken-robot/rafiki/render?color=&background=complete&hide=" alt="" />
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <NavLink to="/" className="btn btn-primary">Go Home</NavLink>
            </div>
        </div>
    </>
  )
}

export default Error