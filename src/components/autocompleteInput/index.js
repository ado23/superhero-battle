import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

class AutocompleteInput extends Component {
  render() {
    const { filteredOptions, showOptions, userInput } = this.props;
    const { onChange, onClick, onKeyDown } = this.props;

    let suggestionsListComponent;

    if (showOptions && userInput) {
      if (filteredOptions.length < 15) {
        suggestionsListComponent = (
          <ul className="options">
            {filteredOptions.map(optionName => {
              return (
                <li key={optionName} onClick={onClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <input
          name="samoForma"
          type="text"
          className="search-box"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          placeholder="Search for hero..."
        />
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

AutocompleteInput.propTypes = {
  filteredOptions: PropTypes.array,
  showOptions: PropTypes.bool,
  userInput: PropTypes.string
};

AutocompleteInput.defaultProps = {
  showOptions: false,
  filteredOptions: [],
  userInput: ""
};

export default AutocompleteInput;
