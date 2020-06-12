import React, { Component } from 'react'
import { Card } from 'antd';
import GenreList from '../components/GenreList';
import styled from 'styled-components';
import PropTypes from "prop-types";
import Axios from "axios";
import AllResults from "../components/AllResults";

const { Meta } = Card;
const apiKey = process.env.REACT_APP_API_KEY;

class ActionPage extends Component {
    state = {
      searchText: "",
      error: "",
      fetchingData: false
    };
  
    onTextChange = e => {
      this.setState({
        searchText: e.target.value
      });
    };
  
    onButtonClick = () => {
      this.setState({
        fetchingData: true
      });
      const { searchText } = this.state;
      const requestUri =
        `https://cors-anywhere.herokuapp.com/` +
        `https://www.goodreads.com/search/index.xml?key=${'d0fOzsPuJxLvF5CvZt8Sbg'}&q=${searchText}`;
  
      Axios.get(requestUri)
        .then(res => {
          this.parseXMLResponse(res.data);
        })
        .catch(error => {
          this.setState({
            error: error.toString(),
            fetchingData: false
          });
        });
    };
  
    // parse string xml received from goodreads api
    parseXMLResponse = response => {
      const parser = new DOMParser();
      const XMLResponse = parser.parseFromString(response, "application/xml");
      const parseError = XMLResponse.getElementsByTagName("parsererror");
  
      if (parseError.length) {
        this.setState({
          error: "There was an error fetching results.",
          fetchingData: false
        });
      } else {
        const XMLresults = new Array(...XMLResponse.getElementsByTagName("work"));
        const searchResults = XMLresults.map(result => this.XMLToJson(result));
        this.setState({ fetchingData: false }, () => {
          this.props.setResults(searchResults);
        });
      }
    };
  
    // Function to convert simple XML document into JSON.
    // Loops through each child and saves it as key, value pair
    // if there are sub-children, call the same function recursively on its children.
    XMLToJson = XML => {
      const allNodes = new Array(...XML.children);
      const jsonResult = {};
      allNodes.forEach(node => {
        if (node.children.length) {
          jsonResult[node.nodeName] = this.XMLToJson(node);
        } else {
          jsonResult[node.nodeName] = node.innerHTML;
        }
      });
      return jsonResult;
    };
  
    render() {
      return (
        <div>
          <div className="row">
            <input
              className="mr-1 col-sm-9 form-control"
              type="text"
              placeholder="Search Books By title, author, or ISBN..."
              // 
              name="searchText"
              onChange={this.onTextChange}
              value={this.state.searchText}
            />
            <button
              className="col-sm-2 btn font-weight-bold"
              onClick={this.onButtonClick}
            >
              Search
            </button>
          </div>
  
          {/**
           * if fetching data, display "loading...", if error, display error message, else display search results
           */}
          {this.state.fetchingData ? (
            <p className="lead text-center">{"Loading... "}</p>
          ) : (
            (this.state.error && (
              <p className="text-danger">{this.state.error}</p>
            )) || (
              <AllResults
                books={this.props.results}
                expandBook={this.props.expandBook}
              />
            )
          )}
        </div>
      )
    }
  }

ActionPage.propTypes = {
    results: PropTypes.array,
    setResults: PropTypes.func,
    expandBook: PropTypes.func
  };
export default ActionPage;

// const Action =styled.div`
// .card {
//     border-color : transparent;
//     transition : all 1s linear;
//     // background-color : #C38D9E;
//     // float: left;
//     // width: 25%;
//     padding: 0px 0px;
//     display: flex;
// }

// .card-footer {
//     background : transparent;
//     border-top : transparent;
//     transition : all 1s linear;
//     // background-color : #E8A87C;
// }
// }
// &:hover {
//     .card {
//         border : 0.04rem solid rgba(0, 0, 0, 0.2);
//         box-shadow : 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
//         // background-color : darkgrey;

//    }
//    .card-footer {
//        background : rgba(247, 247, 247);
//        //background-color : orange;
//    }
// }
// .img-container {
//     position : relative;
//     overflow : hidden;
// }
// .card-img-top {
//     transition : all 1s linear;
// }
// .img-container:hover .card-img-top {
//     transform : scale(1.3);
// } 
// `;