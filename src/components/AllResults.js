import React from "react";
import SearchResult from "./SearchResult";
import PropTypes from "prop-types";
import ActionPage from "../folderGenre/ActionPage";

const AllResults = ({ books, expandBook }) => {
  return (
    <div className="row">
      {books.map(book => (
        <SearchResult bookData={book} key={book.id} expandBook={expandBook} />
        // <ActionPage bookData={book} key={book.id} expandBook={expandBook} />
      ))}
    </div>
  );
};

AllResults.propTypes = {
  books: PropTypes.array,
  expandBook: PropTypes.func
};

export default AllResults;
