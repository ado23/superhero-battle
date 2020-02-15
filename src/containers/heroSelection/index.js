import React, { Component } from "react";
import "./styles.scss";
import AutocompleteInput from "../../components/autocompleteInput";
import Card from "../../components/card";

class HeroSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroData: {
        name: "Unknown",
        powerstats: {
          intelligence: 0,
          strength: 0,
          speed: 0,
          durability: 0,
          power: 0,
          combat: 0
        },
        appearance: {
          height: ["1", "1 cm"],
          weight: ["1", "1 kg"]
        },
        images: {
          lg:
            "https://image.shutterstock.com/image-vector/male-face-silhouette-icon-man-260nw-1165858396.jpg"
        },
        biography: {
          publisher: "unknown"
        }
      },
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

    let heroData = allCharacters.find(character => {
      return e.currentTarget.innerText === character.name;
    });

    this.props.setHeroData(heroData, this.props.name);

    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
      heroData
    });
  };

  onKeyDown = e => {
    let { allCharacters } = this.props;

    const { activeOption, filteredOptions } = this.state;

    let heroData = allCharacters.find(character => {
      return filteredOptions[activeOption] === character.name;
    });

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        filteredOptions: [],
        userInput: filteredOptions[activeOption],
        heroData
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
    const { heroData, userInput, showOptions, filteredOptions } = this.state;
    let { name, placeholder } = this.props;

    let { setHeroData } = this.props;

    return (
      <div className="battle">
        <div className="firstCharacter">
          {/* {Object.entries(heroData).length > 0 ? ( */}
          <Card characterData={heroData} />
          {/* ) : null} */}

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
        </div>
      </div>
    );
  }
}

export default HeroSelection;
