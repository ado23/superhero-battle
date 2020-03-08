import React from "react";
import "./styles.scss";

// prettier-ignore
const Pagination = ({heroesLength, heroesPerPage, pageNumbers, paginate, setPageNumbersForward, setPageNumbersBack}) => {

  let limitForward = Math.ceil(heroesLength / heroesPerPage);
  let lastElement = pageNumbers.length;

  let currentBack = pageNumbers[0];
  let currentForward = pageNumbers[lastElement - 1];
  let amountForward = 5;
  let amountBack = 5;

  return (
    <div className="container">
      <ul className="list">
        <li key="back" className="listElement">
          <a
            onClick={currentBack > 1 ? () => setPageNumbersBack(amountBack) : null}
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
            onClick={currentForward < limitForward ? () => setPageNumbersForward(amountForward) : null }
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
