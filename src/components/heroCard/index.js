import React, { Component, Fragment } from "react";
import "./styles.scss";

class HeroCard extends Component {
  render() {
    let { heroData } = this.props;
    let { srcImg } = this.props;

    console.log("HERO DATA: ", heroData);

    return (
      <div className="container">
        <article className="article">
          <div className="thumbnail">
            <img className="thumbnail_image" src={srcImg} alt="sss" />
          </div>

          <div className="content">
            <h3 className="title">BLACK KNIGHT (SIR PERCY)</h3>
            <div className="description">
              <p>
                Sir Percy of Scandia, also known as the original Black Knight,
                is a fictional character in the Marvel Universe.
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

HeroCard.defaultProps = {
  srcImg: "https://community.algolia.com/marvel-search/img/hit-default.jpg"
};

export default HeroCard;
