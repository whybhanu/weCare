import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

const Profile = () => {

    let navigate = useNavigate();

    const callProfilePage = async () => {
        try {
            const res = await fetch('/profile', {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
             const data = await res.json();
             console.log(data);

             if(!res.status === 200){
                const error = new Error(res.error);
                throw error; 
             }

        } catch (error) {
            console.log(error);
            navigate('/login');
        }
    }
    useEffect(() => {
      callProfilePage();
    })
    

  return (
    <>
        <section className="vh-100" style={{backgroundColor: "#f4f5f7"}}>
            <form method="GET">

            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-6 mb-4 mb-lg-0">
                    <div className="card mb-3" style={{borderRadius: "0.5rem"}}>
                    <div className="row g-0">
                        <div className="col-md-4 gradient-custom text-center text-white"
                        style={{borderRadius: "0.5rem"}}>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            alt="Avatar" className="img-fluid my-5" style={{width: "80px"}} />
                        <h5>Marie Horwitz</h5>
                        <p>Web Designer</p>
                        <i className="far fa-edit mb-5"></i>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body p-4">
                            <h6>Information</h6>
                            <hr className="mt-0 mb-4"/>
                            <div className="row pt-1">
                            <div className="col-6 mb-3">
                                <h6>Email</h6>
                                <p className="text-muted">info@example.com</p>
                            </div>
                            <div className="col-6 mb-3">
                                <h6>Phone</h6>
                                <p className="text-muted">123 456 789</p>
                            </div>
                            </div>
                            <h6>Projects</h6>
                            <hr className="mt-0 mb-4"/>
                            <div className="row pt-1">
                            <div className="col-6 mb-3">
                                <h6>Recent</h6>
                                <p className="text-muted">Lorem ipsum</p>
                            </div>
                            <div className="col-6 mb-3">
                                <h6>Most Viewed</h6>
                                <p className="text-muted">Dolor sit amet</p>
                            </div>
                            </div>
                            <div className="d-flex justify-content-start">
                            <a href="https://www.facebook.com"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                            <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                            <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </form>
        </section> 
    </>
  )
}

export default Profile