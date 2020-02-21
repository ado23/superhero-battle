import React, { Component } from "react";

import AutocompleteInput from "../../components/autocompleteInput";

class HeroSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: ""
    };
  }

  componentDidMount() {
    let { allCharacters } = this.props;
    let onlyNames = allCharacters.map(character => {
      return character.name;
    });

    this.setState({
      ...this.state,
      characters: onlyNames
    });
  }

  onChange = e => {
    const { characters } = this.state;
    const userInput = e.currentTarget.value;

    const filteredOptions = characters.filter(
      optionName =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput
    });
  };

  onClick = e => {
    let { allCharacters } = this.props;
    let { name, setHeroData } = this.props;

    let heroData = allCharacters.find(character => {
      return e.currentTarget.innerText === character.name;
    });

    setHeroData(heroData, name);

    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onKeyDown = e => {
    let { allCharacters, name, setHeroData } = this.props;

    const { activeOption, filteredOptions } = this.state;

    let heroData = allCharacters.find(character => {
      return filteredOptions[activeOption] === character.name;
    });

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        filteredOptions: [],
        userInput: filteredOptions[activeOption]
      });
      setHeroData(heroData, name);
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const { userInput, showOptions, filteredOptions } = this.state;
    let { name, placeholder } = this.props;

    return (
      <AutocompleteInput
        name={name}
        type="text"
        value={userInput}
        showOptions={showOptions}
        placeholder={placeholder}
        filteredOptions={filteredOptions}
        onClick={this.onClick.bind(this)}
        onChange={this.onChange.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
      />
    );
  }
}

export default HeroSelection;
