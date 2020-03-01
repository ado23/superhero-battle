import React, { Component } from "react";
import HeroCard from "../../components/heroCard";
import heroes from "../../api/characters";
import allHeroes from "../../api/charactersMarvel";

import "./styles.scss";

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes,
      limit: 5
    };
  }

  showMore() {
    this.setState = {
      ...this.state,
      limit: 10
    };
  }
  render() {
    return (
      <div className="mainContainer">
        <div className="filterContainer">
          <h3 className="titleFilter">FILTERS</h3>
        </div>
        <div className="heroList">
          {allHeroes.map(hero => {
            return <HeroCard key={hero.id} heroData={hero} />;
          })}
          {/* <HeroCard heroData={heroes} />; */}
        </div>
      </div>
    );
  }
}

export default Heroes;
