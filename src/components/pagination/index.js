import React from "react";
import "./styles.scss";

const Pagination = ({ heroesPerPage, totalHeroes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalHeroes / heroesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <ul className="list">
        {pageNumbers.map(number => (
          <li key={number} className="listElement">
            <a
              onClick={() => paginate(number)}
              href="#!"
              className="listNumber"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
