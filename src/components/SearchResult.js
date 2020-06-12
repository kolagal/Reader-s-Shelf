import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'
const SearchResult = ({ bookData, expandBook }) => {
  /**
   * truncate book title to first 4 words and append it with '...'
   * indicating it is truncated.
   * Full title will be shown in a tooltip
   */
  const bookTitle = bookData.best_book.title;
  let displayTitle = bookTitle
    .split(" ")
    .slice(0, 5)
    .join(" ");
  if (bookTitle.length > displayTitle.length) {
    displayTitle += "...";
  }

  return (
    <Searches className="col-lg-3 col-sm-3 col-md-3">
      <div className="card">
        <img
          className="card-img-top pl-2 pr-2 pt-2"
          src={bookData.best_book.image_url}
          alt="Book cover"
          height="200px"
        />
        <div className="card-body">
          <p
            className="text-sm-left card-title font-weight-bold"
            data-toggle="tooltip"
            data-placement="bottom"
            title={displayTitle.includes("...") ? bookTitle : ""}
          >
            {displayTitle}
          </p>
          <p className="text-sm-left card-text">
            {bookData.best_book.author.name}
          </p>

          <button
            className="btn"
            onClick={() => expandBook(bookData)}
          >
            More Info
          </button>
        </div>
      </div>
    </Searches>
  );
};

//171D4B
SearchResult.propTypes = {
  bookData: PropTypes.object,
  expandBook: PropTypes.func
};

export default SearchResult;
const Searches =styled.div`
.btn{
  color : white;
  // background-color : rgb(23, 29, 75);
  background-color : #171D4B;
  //barlow
}
.col-lg-3 col-sm-3 col-md-3{
  min-height :0vh;
}
.card-body {
  padding : 1.5rem;  
}
.card {
  position : relative;
  display : flex;
  flex-direction : column;
  min-width: 0;
  background-clip: border-box;
  border: 1px solid rgba (0,0,0,.125);
  border-radius: 1rem;
  height: 400px;
}
`;
