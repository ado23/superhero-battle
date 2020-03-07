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

  setPageNumbersForward() {
    const { pageNumbers } = this.state;
    let pageNumbersForward = [];

    let last = Math.ceil(this.state.heroes.length / this.state.heroesPerPage);
    let lastNumber = pageNumbers[9];

    pageNumbersForward = pageNumbers.map(number => {
      return number + 5;
    });

    if (last - lastNumber < 5) {
      pageNumbersForward = [...pageNumbers];

      let razlika = last - lastNumber;

      for (let i = lastNumber + 1; i <= last; i++) {
        pageNumbersForward.push(i);
      }

      pageNumbersForward = pageNumbersForward.slice(razlika);
    }
    console.log("PAGE NUMBERS FORWARD: ", pageNumbersForward);

    this.setState({
      pageNumbers: pageNumbersForward
    });
  }

  setPageNumbersBack() {
    const { pageNumbers } = this.state;
    let pageNumbersBack = pageNumbers.map(number => {
      return number - 5;
    });

    console.log("PAGE NUMBERS BACK: ", pageNumbersBack);

    let first = 1;
    let firstNumber = pageNumbers[0];

    if (firstNumber - first < 5) {
      pageNumbersBack = [...pageNumbers];

      let razlika = firstNumber - first;
      console.log("PAGE SDASDAS: ", pageNumbersBack[0]);
      let zadnji = pageNumbersBack[0];

      for (let i = zadnji - 1; i > 0; i--) {
        pageNumbersBack.unshift(i);
      }

      pageNumbersBack = pageNumbersBack.slice(0, -razlika);

      console.log("OVDJE PAGE NUMBES : ", pageNumbersBack);
    }

    console.log("PAGE NUMBERS BACK NA KRAJU: ", pageNumbersBack);

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
