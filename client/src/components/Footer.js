import React from 'react'
import imageLogo from '../images/logoWeCare.png'

export default function Footer() {
  return (
    <div>
        <div className="xyz">
<footer className="footer-info bd-footer py-4 py-md-5 mt-5">
  <div className=" pt-3 text-center pr-xl-5 pr-lg-5 pr-md-5 pr-0">
    <a className="zfheadlogo text-uppercase pl-0" href="/">
      <span>
        <img width={120}
          src={imageLogo}
          className="img-fluid zimg-logo"
          alt="Hello world"
        />
      </span>
    </a>
    <h5 className="heading-footer">weCareSmart</h5>
  </div>
  <div className="container py-4 py-md-5 px-4 px-md-3">
    <div className="row">
      <div className="col-6 col-lg-2 offset-lg-1 mb-3">
        <h5>
          <b>ABOUT US</b>
        </h5>
        <ul className="list-unstyled">
          <li className="mb-2">
            <a className="footer-texts" href="/">
              weCareSmart is an e-commerce website used to sell all kind of medicines and set appointments with doctors.
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-lg-2  mb-3">
        <h5>
          <b>SERVICES</b>
        </h5>
        <ul className="list-unstyled">
          <li className="mb-2">
            <a className="footer-texts" href="/">
              Home Delivery
            </a>
          </li>
          <li className="mb-2">
            <a className="footer-texts" href="/">
              Delivery via drone
            </a>
          </li>
          <li className="mb-2">
            <a className="footer-texts" href="/">
              Best medical medicines
            </a>
          </li>
          <li className="mb-2">
            <a className="footer-texts" href="/">
              Appointments with doctors
            </a>
          </li>
          
        </ul>
      </div>
      <div className="col-6 col-lg-2 mb-3">
        <h5>
          <b> CONTACT US</b>
        </h5>
        <ul className="list-unstyled">
          <li className="mb-2">
            <a className="footer-texts" href="/">
              If you want to contact us about any issue our support available to help you 24*7
            </a>
          </li>
          <li className="mb-2">
            <a className="footer-texts" href="/">
              1800 120 1193
            </a>
          </li>
          <li className="mb-2">
            <a className="footer-texts" href="/">
            weCareSmart@india.in
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-lg-2 mb-3">
        <h5>
          <b>MORE</b>
        </h5>
        <ul className="list-unstyled">
          <li className="mb-2">
            <a className="footer-texts" href="/">
              Refer and Earn
            </a>
          </li>
          <li className="mb-2">
            <a className="footer-texts" href="/">
              Hire From Us
            </a>
          </li>
          <li className="mb-2">
            <a className="footer-texts" href="/">
              Help Center
            </a>
          </li>
          <li className="mb-2">
            <a className="footer-texts" href="/">
              Security Center
            </a>
          </li>
          <li className="mb-2">
            <a className="footer-texts" href="/">
              Blog
            </a>
          </li>
          <li className="mb-2">
            <a className="footer-texts" href="/">
              Terms and Conditions
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-lg-2 mb-3">
        <h5>
          <b>FOLLOW US</b>
        </h5>
        <ul className="list-unstyled">
          <li className="mb-2">
            <a className="footer-texts" href="/">
              Linkedin
            </a>
          </li>
          <li className="mb-2">
            <a className="footer-texts" href="/">
              Facebook
            </a>
          </li>
          <li className="mb-2">
            <a className="footer-texts" href="/">
              Twitter
            </a>
          </li>
          <li className="mb-2">
            <a className="footer-texts" href="/">
              Instagram
            </a>
          </li>
          <li className="mb-2">
            <a className="footer-texts" href="/">
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <hr />
  <div className="container heading-footer zcopyright p-2">
    Copyright © 2022 weCare foundation. All rights reserved.{" "}
    <br />
    Vit Technologies Pvt. Ltd.
    <span className="hidden">Version:&nbsp;3.0</span>
  </div>
</footer>
</div>
    </div>
  )
}