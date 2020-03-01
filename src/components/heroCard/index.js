import React, { Component } from "react";
import "./styles.scss";

class HeroCard extends Component {
  render() {
    let { heroData } = this.props;

    let srcImg = heroData[0].images.sm;
    let { name } = heroData[0];
    let {
      fullName,
      placeOfBirth,
      aliases,
      publisher,
      alignment,
      firstAppearance
    } = heroData[0].biography;

    let work = heroData[0].work.occupation;
    let connections = heroData[0].connections.groupAffiliation;

    return (
      <div className="container">
        <article className="article">
          <div className="thumbnail">
            <img className="thumbnail_image" src={srcImg} alt="sss" />
          </div>

          <div className="content">
            <h3 className="title">{name}</h3>
            <div className="description">
              <p>Full name: {fullName}</p>
              <p> Place of birth: {placeOfBirth}</p>
              <p>Aliases: {aliases}</p>
              <p> Publisher: {publisher}</p>
              <p> Aligment: {alignment} </p>
              <p>First appearance: {firstAppearance} </p>
              <p> Occupation: {work} </p>
              <p>Connctions: {connections}</p>
            </div>
          </div>
        </article>
        <article className="article">
          <div className="thumbnail">
            <img className="thumbnail_image" src={srcImg} alt="sss" />
          </div>

          <div className="content">
            <h3 className="title">{name}</h3>
            <div className="description">
              <p>Full name: {fullName}</p>
              <p> Place of birth: {placeOfBirth}</p>
              <p>Aliases: {aliases}</p>
              <p> Publisher: {publisher}</p>
              <p> Aligment: {alignment} </p>
              <p>First appearance: {firstAppearance} </p>
              <p> Occupation: {work} </p>
              <p>Connctions: {connections}</p>
            </div>
          </div>
        </article>
        <article className="article">
          <div className="thumbnail">
            <img className="thumbnail_image" src={srcImg} alt="sss" />
          </div>

          <div className="content">
            <h3 className="title">{name}</h3>
            <div className="description">
              <p>Full name: {fullName}</p>
              <p> Place of birth: {placeOfBirth}</p>
              <p>Aliases: {aliases}</p>
              <p>First appearance: {firstAppearance} </p>
              <p> Publisher: {publisher}</p>
              <p> Aligment: {alignment} </p>
              <p> Occupation: {work} </p>
              <p>Connctions: {connections}</p>
            </div>
          </div>
        </article>
        <article className="article">
          <div className="thumbnail">
            <img className="thumbnail_image" src={srcImg} alt="sss" />
          </div>

          <div className="content">
            <h3 className="title">{name}</h3>
            <div className="description">
              <p>Full name: {fullName}</p>
              <p> Place of birth: {placeOfBirth}</p>
              <p>Aliases: {aliases}</p>
              <p>First appearance: {firstAppearance} </p>
              <p> Publisher: {publisher}</p>
              <p> Aligment: {alignment} </p>
              <p> Occupation: {work} </p>
              <p>Connctions: {connections}</p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

HeroCard.defaultProps = {
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
      md: "https://community.algolia.com/marvel-search/img/hit-default.jpg"
    },
    biography: {
      publisher: "unknown"
    }
  }
};

export default HeroCard;
