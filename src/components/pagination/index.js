import React from "react";
import "./styles.scss";

const Pagination = ({
  allHeroes,
  heroesPerPage,
  paginate,
  currentPage,
  pageNumbers,
  setPageNumbersForward,
  setPageNumbersBack
}) => {
  let limitForward = Math.ceil(allHeroes / heroesPerPage);
  let currentBack = pageNumbers[0];
  let currentForward = pageNumbers[9];

  return (
    <div className="container">
      <ul className="list">
        <li key="back" className="listElement">
          <a
            onClick={currentBack > 1 ? () => setPageNumbersBack() : null}
            href="#!"
            className="listNumber"
          >
            &lt;&lt;
          </a>
        </li>
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
        <li key="next" className="listElement">
          <a
            onClick={
              currentForward < limitForward
                ? () => setPageNumbersForward()
                : null
            }
            href="#!"
            className="listNumber"
          >
            &gt;&gt;
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
