import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from './components/Signin'
import Register from './components/Register'
import About from './components/About'
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Search from "./components/Search";
// import BookInfo from "./components/BookInfo";
import Genre from "./components/Genre";
import Details from "./components/Details";
import GenreList from "./components/GenreList";
import ActionPage from "./folderGenre/ActionPage";
import FooterPage from "./components/FooterPage";
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <div>
        <React.Fragment>
          {/* <div className="App">       */}
          <Switch>
          <Route exact path = "/" component = {GenreList} />
          <Route path = "/signin" component = {Signin} />
          <Route path = "/about" component = {About} />
          <Route path = "/details" component = {Details} />
          <Route path = "/register" component = {Register} />
          </Switch>
        </React.Fragment>
      </div>
      <FooterPage />
      </div>
    )
  }
}

export default App
