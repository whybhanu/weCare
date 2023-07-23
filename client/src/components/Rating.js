import React from 'react'
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/free-solid-svg-icons';

const Rating = ({value, text}) => {
  return (
    <>
       <div className="rating">
        <span>
          <i className={value>=1? "fa-solid fa-star": value >= 0.5? 'fa-solid fa-star-half-alt' : "fa-solid fa-start"} style={{color: "#FFB100"}}></i>
        </span>
        <span>
          <i className={value>=2? "fa-solid fa-star": value >= 1.5? 'fa-solid fa-star-half-alt' : "fa-solid fa-start"} style={{color: "#FFB100"}}></i>
        </span>
        <span>
          <i className={value>=3? "fa-solid fa-star": value >= 2.5? 'fa-solid fa-star-half-alt' : "fa-solid fa-start"} style={{color: "#FFB100"}}></i>
        </span>
        <span>
          <i className={value>=4? "fa-solid fa-star": value >= 3.5? 'fa-solid fa-star-half-alt' : "fa-solid fa-start"} style={{color: "#FFB100"}}></i>
        </span>
        <span>
          <i className={value>=5? "fa-solid fa-star": value >= 4.5? 'fa-solid fa-star-half-alt' : "fa-solid fa-start"} style={{color: "#FFB100"}}></i>
        </span>

       <span>{text }</span>
       </div>
    </>
  )
}

export default Rating