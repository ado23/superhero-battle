import React, { Component } from "react";
import "./styles.scss";

import allCharacters from "../../api/allCharacters";
import HeroSelection from "../heroSelection";
import Card from "../../components/card";

class SuperheroBattle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstHero: {
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
          height: ["0", "0 cm"],
          weight: ["0", "0 kg"]
        },
        images: {
          lg: "https://community.algolia.com/marvel-search/img/hit-default.jpg"
        },
        biography: {
          publisher: "unknown"
        }
      },
      secondHero: {
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
          height: ["0", "0 cm"],
          weight: ["0", "0 kg"]
        },
        images: {
          lg: "https://community.algolia.com/marvel-search/img/hit-default.jpg"
        },
        biography: {
          publisher: "unknown"
        }
      }
    };
  }

  findWinnner() {
    let firstHeroPowerstats = Object.values(this.state.firstHero.powerstats);
    let secondHeroPowerstats = Object.values(this.state.secondHero.powerstats);

    let firstHeroPoints = 0;
    let secondHeroPoints = 0;
    let winner = "";

    firstHeroPowerstats.forEach((element, index) => {
      if (element > secondHeroPowerstats[index]) {
        firstHeroPoints++;
      } else if (element < secondHeroPowerstats[index]) {
        secondHeroPoints++;
      }
    });

    if (firstHeroPoints > secondHeroPoints) {
      winner = this.state.firstHero.name;
    } else if (firstHeroPoints < secondHeroPoints) {
      winner = this.state.secondHero.name;
    } else {
      winner = "Draw";
    }

    alert(winner);
  }

  setHeroData(heroData, name) {
    this.setState({
      [name]: heroData
    });
  }

  render() {
    const { firstHero, secondHero } = this.state;

    return (
      <div className="battle">
        <HeroSelection
          name="firstHero"
          placeholder="Search for hero..."
          allCharacters={allCharacters}
          setHeroData={this.setHeroData.bind(this)}
        />
        <Card characterData={firstHero} />
        <button className="myButton" onClick={this.findWinnner.bind(this)}>
          Battle
        </button>
        <Card characterData={secondHero} />
        <HeroSelection
          name="secondHero"
          placeholder="Search for hero..."
          allCharacters={allCharacters}
          setHeroData={this.setHeroData.bind(this)}
        />
      </div>
    );
  }
}

export default SuperheroBattle;
