import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from 'react-router-dom';
import Logo2 from './Logo2.png';
import './FooterPage.css';
const FooterPage = () => {
  return (
    <MDBFooter className="footerlogocontainer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          {/* <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol> */}
           <div className = "logo-footercontainer">
                <Link to = '/'>
                    <img width = "60" src = {Logo2} alt = "store"
                    className = "menu-img" />

                </Link>
                <Link to = '/'className = "projectName-footer">
                  <h3>Reader's Shelf</h3>
                </Link>
                </div>
          <MDBCol md="8">
            <h5 className="title">Genres</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Action and Adventure</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Biography</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Crime</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Comedy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Drama</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Fantasy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">History</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Horror</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Myth</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Psychology</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Sci-Fi</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Travel</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          {/* &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a> */}
          Created By Aquila
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
