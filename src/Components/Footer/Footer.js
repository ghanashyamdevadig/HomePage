import React from 'react'
import {
    FacebookFilled,
    TwitterCircleFilled,
  } from "@ant-design/icons";
  import "./Footer.css"

export default function Footer() {
  return (
   <div>
     <div className="footer-container">
        <div className="footer-sub-contr">
          <div>
            <div>
            <img
            className="header-logo"
            src={require("../../Assets/Images/Moo-Beyond-Logo-Final 1.png")}
            alt=""
          />
            </div>
            <strong className="text-1">
              Moo Beyond is an Organic Dairy Brand of Jayalakshmi Farms, India.
            </strong>
            <p className="text-2">
              Our farm is located on the lush grasslands of Mysore, Karnataka
              region. Our flawless dairy production sets the benchmark of
              excellence for your everyday happy life.
            </p>
          </div>
        </div>
        <div className="footer-sub-contr follow-ups-links">
          <div className="quick-calls">
            <h3 className="text-8">QUICK LINKS</h3>
            <div className="polygon-div">
              <div className="polygon-box">
                <img
                  className="polygon"
                  src={require("../../Assets/Images/Polygon 9.png")}
                  alt=""
                />
                <p className="details"> About</p>
              </div>
              <div className="polygon-box">
              <img
                  className="polygon"
                  src={require("../../Assets/Images/Polygon 9.png")}
                  alt=""
                />
                <p className="details"> Products</p>
              </div>
              <div className="polygon-box">
              <img
                  className="polygon"
                  src={require("../../Assets/Images/Polygon 9.png")}
                  alt=""
                />
                <p className="details"> Our farm</p>
              </div>
              <div className="polygon-box">
              <img
                  className="polygon"
                  src={require("../../Assets/Images/Polygon 9.png")}
                  alt=""
                />
                <p className="details"> Contact Us</p>
              </div>
              <div className="polygon-box">
              <img
                  className="polygon"
                  src={require("../../Assets/Images/Polygon 9.png")}
                  alt=""
                />
                <p className="details"> Policy</p>
              </div>
            </div>
          </div>
          <div className="reach-us">
            <h3 className="text-8">REACH US</h3>
            <img
              className="contact-us"
              src={require("../../Assets/Images/phone 1.png")}
              alt=""
            />
            <img
              className="contact-us"
              src={require("../../Assets/Images/Email.png")}
              alt=""
            />
            <img
              className="contact-us"
              src={require("../../Assets/Images/Location.png")}
              alt=""
            />
          </div>
        </div>
        <div className="footer-sub-contr">
          <h3 className="text-8">FOLLOW US</h3>
          <div className="follw-icon-contr">
            <div className="social-face">
              <FacebookFilled />
            </div>
            <div>
            <img
              className="contact-us"
              src={require("../../Assets/Images/Instagram.png")}
              alt=""
            />
            </div>
            <div className="social-twitter">
              <TwitterCircleFilled />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <p>© Moo Beyond. All Rights Reserved.</p>
      </div>
   </div>
  )
}
