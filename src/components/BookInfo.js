import React, { Component } from "react";
import Axios from "axios";
import PropTypes from "prop-types";
import styled from 'styled-components'


const apiKey = process.env.REACT_APP_API_KEY;

class BookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "Fetching description for this book...",
      error: ""
    };
  }

  componentDidMount() {
    this.getDescription();
  }

  getDescription = () => {
    const bookId = this.props.bookData.best_book.id;
    const requestUri =
      `https://cors-anywhere.herokuapp.com/` +
      `https://www.goodreads.com/book/show/${bookId}?key=${'d0fOzsPuJxLvF5CvZt8Sbg'}`;
    Axios.get(requestUri)
      .then(res => {
        const parser = new DOMParser();
        const XMLResponse = parser.parseFromString(res.data, "application/xml");

        const parseError = XMLResponse.getElementsByTagName("parsererror");

        if (parseError.length) {
          this.setState({
            error: "There was an error fetching results."
          });
        } else {
          let description = XMLResponse.getElementsByTagName("description")[0]
            .innerHTML;

          description = description.replace("<![CDATA[", "").replace("]]>", "");

          if (!description) {
            description = "No description found.";
          }
          this.setState({ description });
        }
      })
      .catch(error => {
        this.setState({
          error: error.toString()
        });
      });
  };

  render() {
    const { bookData } = this.props;
    return (
      <Booki className="row col-lg-18">
        <button className="btn" onClick={this.props.collapseBook}>
          {"<< Go Back"}
        </button>

        <h3 className="col-lg-12 mb-3 mt-3">{bookData.best_book.title}</h3>
        <div className="col-lg-2 col-sm-4">
          <img
            src={bookData.best_book.image_url}
            height="200px"
            width="160px"
            alt="book cover"
          />
          <p>
            By : {" "}
            <span className="font-weight-bold font-family-Barlow">
              {bookData.best_book.author.name}
            </span>
          </p>
          <p>Avg . Rating: {bookData.average_rating}</p>
        </div>
        <div className="col-lg-10 col-sm-8">
          {(this.state.error && (
            <p className="text-danger">{this.state.error}</p>
          )) || (
            <p dangerouslySetInnerHTML={{ __html: this.state.description }} />
          )}
        </div>
        <div>
          <p>
            Published Date : {" "}
            {`${bookData.original_publication_day}/${
              bookData.original_publication_month
            }/${bookData.original_publication_year}`}
            .{" "}
            <a
              href={`https://www.goodreads.com/book/show/${
                bookData.best_book.id
              }`}
            >
              Learn More
            </a>
          </p>
        </div>
      </Booki>
    );
  }
}

BookInfo.propTypes = {
  bookData: PropTypes.object,
  collapseBook: PropTypes.func
};

export default BookInfo;

const Booki =styled.div`
.btn {
  color : white;
  // background-color : rgb(23, 29, 75);
  background-color : #171D4B;
  //barlow}
`;

