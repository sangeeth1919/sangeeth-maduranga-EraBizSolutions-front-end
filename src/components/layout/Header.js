


import React, { useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { RightCircleFilled    } from '@ant-design/icons';
import logo from '../../assest/image/logo.png';

function Header(props) {
  const navigate = useNavigate();
  let { pathname } = useLocation();

  const [pathName,setPathName]=useState(null)
  const navigation = (path) => {
    navigate(path);
  }

  useEffect(() => {
    setPathName(pathname)
  }, [pathname])
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="navigation">
        <div className="navigation-list">
       
          <div className="navigation-item" onClick={() => navigation('/home')}>Home<div className={`${pathName=='/home' || pathName=='/'?"active-border":""}`}></div></div>
          <div className="navigation-item" onClick={() => navigation('/doctor')}>Doctor<div className={`${pathName=='/doctor'?"active-border":""}`}></div></div>
          <div className="navigation-item" onClick={() => navigation('/channel')}>Services<div className={`${pathName=='/channel'?"active-border":""}`}></div></div>
          <div className="navigation-item" onClick={() => navigation('/channel')}>Review<div className={`${pathName=='/channel'?"active-border":""}`}></div></div>

        </div>
        <div className="contact">
          <div onClick={() => navigation('/home')}>Contact Us <span><RightCircleFilled   />  </span></div>
        </div>

      </div>


    </div>
  );
}

export default Header;


