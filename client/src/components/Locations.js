import React from 'react'

export const Locations = () => {
  return (
    <>
      <div className="container">

      <h1 className="p-3 text-center"><span><b><h1>Locations and Directions</h1></b></span></h1>

      <div className="row row-cols-1 row-cols-lg-4 g-4 row-cols-md-2">
        <div className="col">
          <div className="shadow card-hover border-0 card h-100">
            <iframe src='https://maps.google.com/maps?q=12.9716,79.5946&h1=es;&output=embed' title='iframemaps' id="iframeId" frameBorder="0"/>
            <h5 className="location card-title">Bangalore, Karnataka</h5>
          </div>
        </div>
        <div className="col">
          <div className="shadow card-hover border-0 card h-100">
            <iframe src='https://maps.google.com/maps?q=28.7041,77.1025&h1=es;&output=embed' title='iframemaps' id="iframeId" frameBorder="0"/>
            <h5 className="location card-title">Delhi</h5>
          </div>
        </div>
        <div className="col">
          <div className="shadow card-hover border-0 card h-100">
            <iframe src='https://maps.google.com/maps?q=19.0760,72.8777&h1=es;&output=embed' title='iframemaps' id="iframeId" frameBorder="0"/>
            <h5 className="location card-title">Mumbai, Maharashtra</h5>
          </div>
        </div>
        <div className="col">
          <div className="shadow card-hover border-0 card h-100">
            <iframe src='https://maps.google.com/maps?q=28.4595,77.0266&h1=es;&output=embed' title='iframemaps' id="iframeId" frameBorder="0"/>
            <h5 className="location card-title">Gurgaon, Haryana</h5>
          </div>
        </div>
        <div className="col">
          <div className="shadow card-hover border-0 card h-100">
      </div>
    </div>
  </div>
</div>
<hr/>
</>
  )
}
export default Locations;