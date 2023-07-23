import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';


export default function Doctors() {

  const [Doctor, setDoctor] = useState([]);
  useEffect(() => {
    const fetchDoctor = async () =>{
      const {data} = await axios.get('/doctors')
      setDoctor(data)
    }
    fetchDoctor();
  },[])

  return (
    <>

<h1 className="p-3 text-center"><span><b><h1>The Best Doctors</h1></b></span></h1>
<div md={3} className="container">
  <div className="block row row-cols-1 row-cols-lg-4 g-4 row-cols-md-2">
{
  Doctor.map(doctor => (

    <div key={doctor._id} className="col">
      <div className="shadow card-hover border-0 card h-100 doctorDiv">
        <NavLink to= {`/doctor/${doctor._id}`}>
          <img src={doctor.image} className="doctorsImg card-img-top" alt="..." style={{display: "block", width: "70%"}}/>
        </NavLink>
        <div className="card-body">
          <h5 className="card-title">{doctor.name}</h5>
          <NavLink to={`/single-doctor/${doctor._id}`}><button className="doctorButton">Visit Profile</button></NavLink>
          <p className="card-text">{doctor.specialization}</p>
        </div>  
      </div>
    </div>
))
}
</div>
</div>


<hr />
    </>
  )
}
