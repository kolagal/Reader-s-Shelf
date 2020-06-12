import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import Logo2 from './Logo2.png';
// import { Carousel } from 'antd';
import 'antd/dist/antd.css';
// import { ButtonContainer } from "./Button";
import './Navstyles.css';
// import carousel1 from '../carouselimg/carousel1.png'
// import carousel2 from '../carouselimg/carousel2.png'
// import carousel3 from '../carouselimg/carousel3.jpg'
// import carousel4 from '../carouselimg/carousel4.jpg'

// import { previewImage } from 'antd/lib/upload/utils';

export default class Navbar extends Component {
    render(){
        return(
            <div>
            {/* <img src = {Image}  alt = "" className = "top-img" /> */}
            <div className = "menubar">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                {/* <Link className = "projectName">
                  <h3>Reader's Shelf</h3>
                </Link> */}
                <div className = "logo-container">
                <Link to = '/'>
                    <img width = "60" src = {Logo2} alt = "store"
                    className = "menu-img" />

                </Link>
                <Link to = '/'className = "projectName">
                  <h3>Reader's Shelf</h3>
                </Link>
                </div>
                <ul className = "menu-wish">
                  <li className = "menu-wish-item">
                    <Link to= "/about" className = "menu-link">
                      ABOUT US 
                    </Link></li>
                  <li className = "menu-wish-item">
                  <Link to = "/signin" className = "sign">
                    <button className = "signin-btn">
                        SIGN IN
                        </button>
                </Link>
                </li>
                </ul>
                
                {/* <Link to = "/signin" className = "sign">
                    <span className = "signi">
                        Sign in
                        </span>
                </Link> */}
                
                {/* <progress 
                  value="19.802213661785057" 
                  id="blog-progress-bar" 
                  class="blog-progress-bar" 
                  max="100">
                </progress> */} 
                
            </div>
            {/* <div> */}
            {/* <Carousel className = "carousel" autoplay>

    <div class="item active">
      <img className ="image1" src = {carousel1} alt="900x500" />
    </div>

    <div class="item">
      <img className = "image2" src = {carousel2} alt="900x500" />
    </div>

    <div class="item">
      <img className = "image3" src = {carousel3} alt="900x500" />
    </div>

    <div class="item">
      <img className = "image4" src = {carousel4} alt="900x500" />
    </div>

  </Carousel> */}
  {/* </div> */}
              </div>
        );
    }
}