import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Aboutdrawing from '../Aboutdrawing.png';
import "./About.css";
function About() {
    return(
      <div>
        <div class="about-img">
      <img className ="img-about" src = {Aboutdrawing} alt="900x500" />
    </div>
    <div className = "vision">
      <h3>
      Who are we
      </h3>
      <p>
We are the Reader's shelf established in June 2020, are here to offer the virtual library for the new and the prevailing reader's community by providing a strong opinion on e-books during the on-going pandemic. We provide information on books for different genres such as Action & Adventure, Biographies, Classic, Comedy, Drama, Fantasy, History, Myth, Psychology, Science-Fiction and so forth. It is a comprehensive open book database providing information pertaining to the latest releases.
      </p>
      <div className = "team">
        <h3>
          Our Team
        </h3>
        <h5>
          Vakul and Vanisha
        </h5>
        {/* <h5>
          Vanisha
        </h5> */}
      </div>
    </div>
    </div>
    )
}

export default About;
