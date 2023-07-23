import React from 'react'
import Doctor from '../DoctorDetails'
import { useParams } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import RatingDoctors from '../components/RatingDoctors';
import doctorBanner from '../images/doctorBanner.jpg';

const SingleDoctorDetails = () => {
  const { id } = useParams();
  const doctor = Doctor.find(p => p._id === id)
  // console.log(JSON.stringify(doctor.timings))
  // console.log(doctor.timings);

  return (
    <>
      <div className='docBg'>
        <img className='doctorBanner no-repeat' src={doctorBanner} alt="" style={{ height: "30vh",width: "100%", background: "center no-repeat "}}/>
      </div>

    <div className="mt-5 container">
      <Row>
        <Col md={4} style={{display: "block", margin: "auto"}}>
          <img className='border border-primary rounded-2 mt-2 mb-3' src={doctor.image} alt="" style={{display: "block", width: "100%",margin: "auto", height:"25rem"}}/>
          <p><b>Name: </b>{doctor.name}</p>
          <p><b>Specialization: </b>{doctor.specialization}</p>
          <p><b>Experience: </b>{doctor.experience}</p>
          <p><b>Slogan: </b>{doctor.slogan}</p>
          <RatingDoctors value={doctor.rating} text={` from ${doctor.numReviews} reviews`}></RatingDoctors>
        </Col>
        
        <Col className='mt-2' md={8}>
          <p className='border p-3'><b>Description: </b>{doctor.description}</p>
        </Col>
      </Row>
      <hr />
      {/* <h1 className="p-3 text-center"><span><b><h1>Book An Appointment At Your Free Time</h1></b></span></h1>
      <Row className=''>
      <div className="app-time">
          <div>
          <div className="formbold-form-wrapper">
      <form action="https://formbold.com/s/FORM_ID" method="POST">
        <div className="formbold-mb-5">
          <label for="name" className="formbold-form-label"> Full Name </label>
          <input
           type="text"
           name="name"
           id="name"
           placeholder="Full Name"
           className="formbold-form-input"
         />
       </div>
       <div className="formbold-mb-5">
         <label for="phone" className="formbold-form-label"> Phone Number </label>
         <input
           type="text"
           name="phone"
           id="phone"
           placeholder="Enter your phone number"
           className="formbold-form-input"
         />
       </div>
       <div className="formbold-mb-5">
         <label for="email" className="formbold-form-label"> Email Address </label>
         <input
           type="email"
           name="email"
           id="email"
           placeholder="Enter your email"
           className="formbold-form-input"
         />
       </div>
       <div className="flex flex-wrap formbold--mx-3">
         <div className="w-full sm:w-half formbold-px-3">
           <div className="formbold-mb-5 w-full">
             <label for="date" className="formbold-form-label"> Date </label>
             <input
               type="date"
               name="date"
               id="date"
               className="formbold-form-input"
             />
           </div>
         </div>
         <div className="w-full sm:w-half formbold-px-3">
           <div className="formbold-mb-5">
             <label for="time" className="formbold-form-label"> Time </label>
             <input
               type="time"
               name="time"
               id="time"
               className="formbold-form-input"
             />
           </div>
         </div>
       </div>
 
       <div className="formbold-mb-5 formbold-pt-3">
         <label className="formbold-form-label formbold-form-label-2">
           Address Details
         </label>
         <div className="flex flex-wrap formbold--mx-3">
           <div className="w-full sm:w-half formbold-px-3">
             <div className="formbold-mb-5">
               <input
                 type="text"
                 name="area"
                 id="area"
                 placeholder="Enter area"
                 className="formbold-form-input"
               />
             </div>
           </div>
           <div className="w-full sm:w-half formbold-px-3">
             <div className="formbold-mb-5">
               <input
                 type="text"
                 name="city"
                 id="city"
                 placeholder="Enter city"
                 className="formbold-form-input"
               />
             </div>
           </div>
           <div className="w-full sm:w-half formbold-px-3">
             <div className="formbold-mb-5">
               <input
                 type="text"
                 name="state"
                 id="state"
                 placeholder="Enter state"
                 className="formbold-form-input"
               />
             </div>
           </div>
           <div className="w-full sm:w-half formbold-px-3">
             <div className="formbold-mb-5">
               <input
                 type="text"
                 name="post-code"
                 id="post-code"
                 placeholder="Post Code"
                 className="formbold-form-input"
               />
             </div>
           </div>
         </div>
       </div>
 
       <div>
         <button onClick={() => alert('Your appointment is booked')} className="formbold-btn">Book Appointment</button>
       </div>
     </form>
   </div>
 </div>
        </div>
      </Row> */}
    </div>
    </>
  )
}

export default SingleDoctorDetails