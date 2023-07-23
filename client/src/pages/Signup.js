import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Signup = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    cpassword: "",
  })

  let name, value;

  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]: value});
  }

  const postData = async (e) => {
    e.preventDefault();
    const {name, email, phone, address, password, cpassword} = user;

    const res = await fetch('/register', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name, email, phone, address, password, cpassword})
    })

    // const data = await res.json();

    if(res.status === 422 || !res){
      window.alert("Invalid Registration");
      console.log("Invalid registration")
    } else{
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate('/login');
      console.log(res);
    }
  }

  
  return (
    <>
        <section className="" style={{backgroundcolor: "#eee", margin: "4rem 0 4rem 0"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderradius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registration Form</p>

                <form method='POST' className="mx-1 mx-md-4 ">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={handleInputs} type="text" placeholder='Your name' name='name' id="name" className="form-control" />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={handleInputs} placeholder='Your Email' name='email' type="email" id="email" className="form-control"/>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa-solid fa-phone fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={handleInputs} placeholder='Mobile Number' name='phone' type="email" id="phone" className="form-control" />
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa-sharp fa-solid fa-location-dot fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={handleInputs} placeholder='Your Address' name='address' type="email" id="address" className="form-control"/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={handleInputs} type="password" name='password' id="password" className="form-control" placeholder='Password'/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={handleInputs} type="password" name='cpassword' id="cpassword" className="form-control" placeholder='Confirm Password'/>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>


                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button onClick={postData} type="button" value="register" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <div>
                  {/* <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=2000"
                  className="img-fluid" alt="..."/> */}
                  <img src="https://stories.freepiklabs.com/api/vectors/mobile-login/pana/render?color=5EAAFFFF&background=complete&hide="
                  className="img-fluid" alt="..."/>
                  {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="..."/> */}
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <NavLink to={'/login'}>
                    <div>I am already a user</div>
                    </NavLink>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Signup