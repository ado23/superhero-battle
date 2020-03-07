import React, { Component, Fragment } from "react";
import HeroCard from "../../components/heroCard";
import heroes from "../../api/characters";
import allHeroes from "../../api/charactersMarvel";

import Pagination from "../../components/pagination";

import "./styles.scss";

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: allHeroes,
      setHeroes: [],
      currentPage: 1,
      setCurrentPage: 1,
      heroesPerPage: 10
    };
  }

  paginate(pageNumber) {
    this.setState({
      currentPage: pageNumber
    });
  }

  render() {
    const indexOfLastHero = this.state.currentPage * this.state.heroesPerPage;
    const indexOfFirstHero = indexOfLastHero - this.state.heroesPerPage;
    const currentHeroes = this.state.heroes.slice(
      indexOfFirstHero,
      indexOfLastHero
    );

    return (
      <Fragment>
        <div className="mainContainer">
          <div className="filterContainer">
            <h3 className="titleFilter">TAKE A LOOK AT ALL THE HEROES</h3>
            <h3 className="titleFilter">OR FIND YOUR FAVORITE ONE</h3>
          </div>
          <div className="heroList">
            {currentHeroes.map(hero => {
              return <HeroCard key={hero.id} heroData={hero} />;
            })}
            {/* <HeroCard heroData={heroes} />; */}
          </div>
          <Pagination
            heroesPerPage={this.state.heroesPerPage}
            totalHeroes={this.state.heroes.length}
            paginate={this.paginate.bind(this)}
          />
        </div>
      </Fragment>
    );
  }
}

export default Heroes;
