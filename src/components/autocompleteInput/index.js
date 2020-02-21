import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

class AutocompleteInput extends Component {
  render() {
    const { filteredOptions, showOptions } = this.props;
    const { onChange, onClick, onKeyDown } = this.props;

    const { name, type, className, value, placeholder } = this.props;

    let suggestionsListComponent;

    if (showOptions && value) {
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
      <div>
        <input
          name={name}
          type={type}
          value={value}
          className="search-box"
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          autocomplete="off"
        />
        {suggestionsListComponent}
      </div>
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
