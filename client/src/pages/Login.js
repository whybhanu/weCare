import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const Login = () => {
  let navigate = useNavigate();

  const [user, setUserLogin] = useState({
    email: "",
    password: ""
  })
  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserLogin({...user, [name]: value})
  }

  const postLoginData = async (e) => {
    e.preventDefault();
    const {email, password} = user;

    const res = await fetch('/signin', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email, password})
    })


    if(res.status === 400 || !res){
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else{
      window.alert("Login Successfully");
      console.log("Login Successfully");
      navigate('/');
      // console.log(res);
    }
  }
  return (
    <>
        <section className="" style={{backgroundcolor: "#eee", margin: "7rem 0 7rem 0" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center ">
                <div>
                  <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png"
                  className="img-fluid" alt="..."/>
                  {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="..."/> */}
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <NavLink to={'/signup'}>
                    <div>I am not a user</div>
                    </NavLink>
                  </div>

                </div>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                <form className="mx-1 mx-md-4 ">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={handleInputs} placeholder='Your Email' name='email' type="email" id="email" className="form-control"/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={handleInputs} type="password" name='password' id="password" className="form-control" placeholder='Password'/>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button onClick={postLoginData} type="button" className="btn btn-primary btn-lg">Log in</button>
                  </div>

                </form>

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

export default Login