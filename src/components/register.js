
import React, { Component } from "react";
import { BrowserRouter , Link } from "react-router-dom";

export default class register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      password: "",
      value: "",
    };
  }
  handlechange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handlesubmit = (event) => {
    alert(`My name is ${this.state.fullname}. 
      My email id is ${this.state.email}.
      
     `);
    //  My password is ${this.state.password}.
    //console.log(JSON.stringify(this.state));
    event.preventDefault();
  };

  render() {
    return (
      <div style={{ textAlign: "center", paddingLeft: "400px" }}>
        <form onSubmit={this.handlesubmit}>
          <br></br>
          <h1>Registration form</h1>
          <br></br>
          <label> Fullname </label>
          <br></br>
          <input
            type="text"
            name="fullname"
            value={this.state.fullname}
            onChange={this.handlechange}
            style={{
              // borderColor: "#0062CC",
              borderRadius: "5px",
              width: "400px",
              border: "1px solid #CED4DA",
            }}
          />{" "}
          <br />
          <label> Email Address </label>
          <br />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handlechange}
            style={{
              // borderColor: "#0062CC",
              borderRadius: "5px",
              width: "400px",
              border: "1px solid #CED4DA",
            }}
          />{" "}
          <br />
          <label> Password </label>
          <br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlechange}
            style={{
              // borderColor: "#0062CC",
              borderRadius: "5px",
              width: "400px",
              border: "1px solid #CED4DA",
            }}
          />{" "}
          <br />
          <br />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            style={{
              color: "white",
              backgroundColor: "#007BFF",
              borderRadius: "5px",
              width: "510px",
              height: "35px",
              border: "1px solid #CED4DA",
            }}
          />
        </form>
        Or <a className = "user"href="signin.js">Already user?</a>
        {/* <p className="back text-center">
          Back<Link to={"/login"}>Here</Link>
        </p> */}
      </div>
    );
  }
}
