import React, { Component, Fragment } from "react";
import HeroCard from "../../components/heroCard";
import Pagination from "../../components/pagination";
import "./styles.scss";

import { getPageNumbersForward, getPageNumberBack } from "./utils";
import heroes from "../../api/allCharacters.json";

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes,
      pageNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currentPage: 1,
      heroesPerPage: 20
    };
  }

  paginate(pageNumber) {
    this.setState({
      currentPage: pageNumber
    });
  }

  setPageNumbersForward(amountForward) {
    const { pageNumbers, heroesPerPage } = this.state;
    const heroesLength = this.state.heroes.length;

    let pageNumbersForward = getPageNumbersForward(
      pageNumbers,
      heroesPerPage,
      heroesLength,
      amountForward
    );

    this.setState({
      pageNumbers: pageNumbersForward
    });
  }

  setPageNumbersBack(amountBack) {
    const { pageNumbers } = this.state;

    let pageNumbersBack = getPageNumberBack(pageNumbers, amountBack);

    this.setState({
      pageNumbers: pageNumbersBack
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
            heroesLength={this.state.heroes.length}
            heroesPerPage={this.state.heroesPerPage}
            pageNumbers={this.state.pageNumbers}
            paginate={this.paginate.bind(this)}
            setPageNumbersForward={this.setPageNumbersForward.bind(this)}
            setPageNumbersBack={this.setPageNumbersBack.bind(this)}
          />
        </div>
      </Fragment>
    );
  }
}

export default Heroes;
