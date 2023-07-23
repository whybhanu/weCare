import React, {useState} from "react";

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  let name, value;

  const handleClick = (e) =>{
    name = e.target.name;
    value = e.target.value;

    setFeedback({...feedback, [name]: value});

  }

  const postFeedback = async (e) =>{
    e.preventDefault();
    const {name, email, subject, message} = feedback;

    const res = await fetch('/feedback', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name, email, subject, message})
    })

    if(res.status === 422 || !res){
      window.alert("Please fill all the details");
      console.log("Please fill all the details");
    } else{
      window.alert("Thanks for the review!!")
      console.log("Thanks for the review!!")
    }
  }
  return (
    <>
          <h1 className="text-center"><span><b><h1>Give us a review!!</h1></b></span></h1>
      <form noValidate="" className="contact-form ng-untouched ng-pristine ng-invalid ng-star-inserted">
        {/* <h3 className="text-center"></h3> */}
        <div  className="row">
          <div  className="col-xs-12 col-sm-6">
            <div  className="form-group">
              <input onChange={handleClick} name="name" type="text" placeholder="Your Name" formcontrolname="name" className="form-control element-block ng-untouched ng-pristine ng-invalid" />
            </div>
          </div>
          <div  className="col-xs-12 col-sm-6">
            <div  className="form-group">
              <input onChange={handleClick} name="email" type="email" placeholder="Email" formcontrolname="email" className="form-control element-block ng-untouched ng-pristine ng-invalid"
              />
            </div>
          </div>
          <div  className="col-xs-12">
            <div  className="form-group">
              <input onChange={handleClick} name="subject" type="text" placeholder="Subject" formcontrolname="subject" className="form-control element-block ng-untouched ng-pristine ng-invalid"/>
            </div>
          </div>
          <div  className="col-xs-12">
            <div  className="form-group">
              <textarea onChange={handleClick} name="message" rows="7" placeholder="Message" formcontrolname="message" className="form-control element-block ng-untouched ng-pristine ng-invalid"></textarea>
            </div>
          </div>
        </div>
        <div  className="form-group text-center">
          <button onClick={postFeedback} type="submit" className="formSubmit btn btn-theme btn-warning text-uppercase font-lato fw-bold">Send Message</button>
        </div>
      </form>
    </>
  );
}
