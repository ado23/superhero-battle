import React, { Component } from "react";
import "./styles.scss";

import allCharacters from "../../api/allCharacters";
import HeroSelection from "../heroSelection";

class SuperheroBattle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstHero: {},
      secondHero: {}
    };
  }

  setHeroData(heroData, name) {
    this.setState({
      [name]: heroData
    });
  }

  render() {
    console.log("STATE U SELECTION: ", this.state);

    return (
      <div className="battle">
        <HeroSelection
          name="FirstHero"
          placeholder="Search for hero..."
          allCharacters={allCharacters}
          setHeroData={this.setHeroData.bind(this)}
        />
        <button className="myButton">Battle</button>
        <HeroSelection
          name="SecondHero"
          placeholder="Search for hero..."
          allCharacters={allCharacters}
          setHeroData={this.setHeroData.bind(this)}
        />
      </div>
    );
  }
}

export default SuperheroBattle;
