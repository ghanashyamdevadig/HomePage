import React from 'react'
import "./Header.css"
import {
    MenuOutlined,
    ShoppingCartOutlined,
    HeartFilled,
    UserOutlined,
  } from "@ant-design/icons";

// import { Avatar, Badge, Space } from 'antd';

export default function Header() {
  return (
    <div className="header-cntr">
    <div className="header-rectangle">
      <div className="hambergur-menu">
        <MenuOutlined />
      </div>
      <div className="main-div-header">
        <div className="nav-container-left">
          <ul>
            <li>
              <a href="#" className="home">
                HOME
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">OUR FARM</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">PRODUCT</a>
            </li>
          </ul>
        </div>

        <div className="header-img">
          <img
            className="header-logo"
            src={require("../../Assets/Images/Moo-Beyond-Logo-Final 1.png")}
            alt=""
          />
        </div>

        <div className="nav-container-right">
          <ul>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">ABOUT US</a>
            </li>
          </ul>
        </div>
        <div className="user-cntr">
          <div className="round-box">
            <ShoppingCartOutlined />
          
          </div>
          <div className="round-box">
            <HeartFilled />
          </div>
          <div className="round-box">
            <UserOutlined />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
