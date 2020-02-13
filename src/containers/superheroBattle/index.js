import React, { Component } from "react";
import "./styles.scss";
import Card from "../../components/card";
import characters from "../../api/characters";
// import Navbar from "../../components/navbar";
// import DefaultCard from "../../components/defaultCard";
// import SuperheroBattle from "../../containers/superheroBattle";
import allCharacters from "../../api/allCharacters";
import AutocompleteInput from "../../components/autocompleteInput";

class SuperheroBattle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      firstCharacter: {},
      secondCharacter: {},
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: ""
    };
  }

  componentDidMount() {
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
      userInput: e.currentTarget.value
    });
  };

  onClick = e => {
    let novi = allCharacters.find(character => {
      return e.currentTarget.innerText === character.name;
    });

    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
      firstCharacter: novi
    });
  };

  onKeyDown = e => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
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
    const { filteredOptions, showOptions, userInput } = this.state;
    const { firstCharacter } = this.state;

    console.log("THIS SATTE: ", this.state);

    return (
      <div className="battle">
        <div className="firstCharacter">
          {Object.entries(firstCharacter).length > 0 ? (
            <Card characterData={firstCharacter} />
          ) : null}

          <AutocompleteInput
            userInput={userInput}
            showOptions={showOptions}
            filteredOptions={filteredOptions}
            onClick={this.onClick.bind(this)}
            onChange={this.onChange.bind(this)}
            onKeyDown={this.onKeyDown.bind(this)}
          />
        </div>
        <div className="secondCharacter">
          {Object.entries(firstCharacter).length > 0 ? (
            <Card characterData={firstCharacter} />
          ) : null}

          <AutocompleteInput
            userInput={userInput}
            showOptions={showOptions}
            filteredOptions={filteredOptions}
            onClick={this.onClick.bind(this)}
            onChange={this.onChange.bind(this)}
            onKeyDown={this.onKeyDown.bind(this)}
          />
        </div>
      </div>
      /**  <Fragment>
         <Navbar />
         <div>
          {characters.map(character => {
            return <Card key={character.id} characterData={character} />;
          })}
        </div> 
        <DefaultCard />
         <SuperheroBattle /> 

        
       </Fragment>*/
    );
  }
}

export default SuperheroBattle;
