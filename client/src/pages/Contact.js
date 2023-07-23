import React, {useState} from 'react'

const Contact = () => {

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  let name, value;

  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setContact({...contact, [name]: value});
    
  }

  const postMessage = async (e) => {
    e.preventDefault();
    const {name, email, phone, message} = contact;

    const res = await fetch('/contact', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name, email, phone, message})
    })

    if(res.status === 422 || !res){
      window.alert("Please write the details");
      console.log("Please write the details");
    } else {
      window.alert("Message sent successfully");
      console.log("Message sent successfully");

      console.log(res);
    }
  }
  return (
    <>
     <div className="contact_info pb-5">
        <div className="container-fluid ">
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center pt-5 px-5">
              <div className="shadow-lg p-3 mx-5 mb-5 bg-body rounded contact_info_item d-flex justify-contebt-start align-items-center" style={{width: "25rem"}}>
                <img className='p-3' src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone"/>
                <div className="contact_info_content">
                  <div className="contact_info_title">
                    Phone
                  </div>
                  <div className="contact_info_text">
                    +91 1111 1111 1111
                  </div>
                </div>
              </div>
              <div className="shadow-lg p-3 mx-5 mb-5 bg-body rounded contact_info_item d-flex justify-content-start align-items-center" style={{width: "25rem"}}>
                <img className="p-3" src="https://img.icons8.com/office/24/000000/email.png" alt="email"/>
                <div className="contact_info_content">
                  <div className="contact_info_title">
                    Email
                  </div>
                  <div className="contact_info_text">
                    contactme@gmail.com
                  </div>
                </div>
              </div>
              <div className="shadow-lg p-3 mx-5 mb-5 bg-body rounded contact_info_item d-flex justify-contebt-start align-items-center" style={{width: "25rem"}}>
              <img className="p-3" src="https://img.icons8.com/office/24/000000/address.png" alt="address"/>
                <div className="contact_info_content">
                  <div className="contact_info_title">
                    Address
                  </div>
                  <div className="contact_info_text">
                    Bhuj, Gujarat, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* CONTACT FORM */}

      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className=" col-lg-10 offset-lg-1">
              <div className="shadow-lg p-3 mb-5 bg-body rounded contact_form_container pb-5">
                <h1 className='d-flex justify-content-center align-items-center py-3' >Get in Touch</h1>
                <form method="POST" action="" id="contact_form">
                  <div className="d-flex flex-wrap py-4 contact_form_name d-flex justify-content-center">
                  <div className="form-floating mb-3 mx-5">
                    <input name='name' onChange={handleInputs} type="text" className="form-control" id="name floatingInput contact_form_name" placeholder="name@example.com" required="true"/>
                    <label htmlFor="floatingInput" style={{width: "14rem"}}>Your Name</label>
                  </div>
                  <div className="form-floating mb-3 mx-5">
                    <input name='email' onChange={handleInputs} type="email" className="form-control" id="email floatingInput contact_form_email" placeholder="name@example.com" required="true"/>
                    <label htmlFor="floatingInput" style={{width: "14rem"}}>Your Email</label>
                  </div>
                  <div className="form-floating mb-3 mx-5">
                    <input name='phone' onChange={handleInputs} type="number" className="form-control" id="phone floatingInput contact_form_phone" placeholder="name@example.com" required="true"/>
                    <label htmlFor="floatingInput" style={{width: "14rem"}}>Phone Number</label>
                  </div>
                  </div>
                  <div className="form-floating contact">
                    <textarea name='message' onChange={handleInputs} className="form-control" placeholder="Leave a comment here" id="message floatingTextarea2" style={{height: "200px"}}></textarea>
                    <label htmlFor="floatingTextarea2">Message</label>
                  </div>

                  <div className="d-flex justify-content-center form-floating contact mt-5 contact_form_button">
                  <button onClick={postMessage} type="button" className="btn btn-lg btn-primary">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact