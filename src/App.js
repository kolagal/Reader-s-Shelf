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
  // state = {
  //   results: [],
  //   expandedBook: null
  // };
  // setResults = results => {
  //   this.setState({ results });
  // };

  // collapseBook = () => {
  //   this.setState({
  //     expandedBook: null
  //   });
  // };

  // expandBook = expandedBook => {
  //   this.setState({ expandedBook });
  // };
  render() {
    return (
      <div>
        {/* <div style = {{
        backgroundColor: 'pink',
        width: '100px',
        height: '100px'
      }} /> */}
      <Navbar />
      <div>
         {/* <div className="container">
           <div className="header clearfix mt-5">
              <h3 className="text-muted">Reader's Shelf Book Search</h3>
           </div>
          <div className="jumbotron search-container">
            {this.state.expandedBook ? (
              <BookInfo
                bookData={this.state.expandedBook}
                collapseBook={this.collapseBook}
              />
            ) : (
              <Search
                results={this.state.results}
                setResults={this.setResults}
                expandBook={this.expandBook}
              />
            )}
          </div>
        </div> */}
        <React.Fragment>
          {/* <div className="App">       */}
          {/* <Navbar /> */}
          {/* <Genre /> */}
          <Switch>
          <Route exact path = "/" component = {GenreList} />
          {/* <Route path = "/genrelist" component = {GenreList} /> */}
          <Route path = "/signin" component = {Signin} />
          <Route path = "/about" component = {About} />
          <Route path = "/details" component = {Details} />
          <Route path = "/register" component = {Register} />
          {/* <Route path = "/actionpage" component = {ActionPage} /> */}

          </Switch>
          {/* </div> */}
        </React.Fragment>
      </div>
      <FooterPage />
      {/* <Footer style={{ textAlign: 'center' }}>Created By Aquila </Footer> */}
      </div>
    )
  }
}

export default App




{/* <p className="back text-center">
          Back<Link to={"/login"}>Here</Link>
        </p> */}

{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}
