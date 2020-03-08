import React, { Component, Fragment } from "react";
import HeroCard from "../../components/heroCard";
import allHeroes from "../../api/charactersMarvel";

import Pagination from "../../components/pagination";

import "./styles.scss";

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: allHeroes,
      pageNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currentPage: 1,
      heroesPerPage: 10
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

    let pageNumbersForward = [];
    let pageNumberLength = pageNumbers.length - 1;
    let lastPagNumber = Math.ceil(heroesLength / heroesPerPage);
    let currentLastPagNumber = pageNumbers[pageNumberLength];
    let currentLastDiff = lastPagNumber - currentLastPagNumber;

    if (currentLastDiff < amountForward) {
      pageNumbersForward = [...pageNumbers];

      for (let i = currentLastPagNumber + 1; i <= lastPagNumber; i++) {
        pageNumbersForward.push(i);
      }

      pageNumbersForward = pageNumbersForward.slice(currentLastDiff);
    } else {
      pageNumbersForward = pageNumbers.map(number => {
        return number + amountForward;
      });
    }

    this.setState({
      pageNumbers: pageNumbersForward
    });
  }

  setPageNumbersBack(amountBack) {
    const { pageNumbers } = this.state;

    let pageNumbersBack = [];
    let firstPagNumber = 1;
    let currentFirstPagNumber = pageNumbers[0];
    let currentLastDiff = currentFirstPagNumber - firstPagNumber;

    if (currentLastDiff < amountBack) {
      pageNumbersBack = [...pageNumbers];

      let lastPreviousNumber = pageNumbersBack[0];

      for (let i = lastPreviousNumber - 1; i > 0; i--) {
        pageNumbersBack.unshift(i);
      }

      pageNumbersBack = pageNumbersBack.slice(0, -currentLastDiff);
    } else {
      pageNumbersBack = pageNumbers.map(number => {
        return number - amountBack;
      });
    }

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
            allHeroes={this.state.heroes.length}
            heroesPerPage={this.state.heroesPerPage}
            paginate={this.paginate.bind(this)}
            currentPage={this.state.currentPage}
            pageNumbers={this.state.pageNumbers}
            setPageNumbersForward={this.setPageNumbersForward.bind(this)}
            setPageNumbersBack={this.setPageNumbersBack.bind(this)}
          />
        </div>
      </Fragment>
    );
  }
}

export default Heroes;
