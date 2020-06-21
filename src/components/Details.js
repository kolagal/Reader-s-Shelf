import React, { Component } from 'react'
import { GenreConsumer } from '../context'
import { Link } from 'react-router-dom'
import AllResults from "./AllResults";
import PropTypes from "prop-types";
import Axios from "axios";
// import Search from 'antd/lib/transfer/search';
import Search from "./Search";
const apiKey = process.env.REACT_APP_API_KEY;

export class Details extends Component {
    state = {
        searchText: "",
        error: "",
        fetchingData: false
      };

      handleDetail = () => {
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
            
            <GenreConsumer>
            
        <div>

        {/* <div className="row">
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
        </div> */}

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

                {value => {
                    const {id,img,info,title} = value.detailGenre;
                    return(
                        <div className = "container py-5">
                            {/*title*/}
                            <div className = "row">
                            <div className = "col-10 mx-auto text-center teext-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/*end title*/}
                        </div>
                    )
                }}
                
            </GenreConsumer>
            </div>
        )
    }
}
Search.propTypes = {
    results: PropTypes.array,
    setResults: PropTypes.func,
    expandBook: PropTypes.func
  };

  export default Details
/* https://www.goodreads.com/book/show/ */

