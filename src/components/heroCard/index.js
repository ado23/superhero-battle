import React, { Component } from "react";
import styles from "./styles.module.scss";

class HeroCard extends Component {
  render() {
    let { heroData } = this.props;

    let srcImg = heroData.images.sm;
    let { name } = heroData;
    let {
      fullName,
      placeOfBirth,
      aliases,
      publisher,
      alignment,
      firstAppearance
    } = heroData.biography;

    let work = heroData.work.occupation;
    let connections = heroData.connections.groupAffiliation;

    return (
      <article className={styles.article}>
        <div className={styles.thumbnail}>
          <img src={srcImg} alt="sss" />
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{name}</h3>
          <div className={styles.description}>
            <p>Full name: {fullName}</p>
            <p> Place of birth: {placeOfBirth}</p>
            <p>Aliases: {aliases}</p>
            <p> Publisher: {publisher}</p>
            <p>First appearance: {firstAppearance} </p>
            <p> Occupation: {work} </p>
            <p>Connctions: {connections}</p>
          </div>
        </div>
        <div className={styles.box}>
          <div
            className={
              alignment === "good" ? styles.aligmentGood : styles.aligmentBad
            }
          >
            <span>{alignment}</span>
          </div>
        </div>
      </article>
    );
  }
}

HeroCard.defaultProps = {
  heroData: {
    id: 26,
    name: "Unknown",
    slug: "Unknown",
    powerstats: {
      intelligence: 0,
      strength: 0,
      speed: 0,
      durability: 0,
      power: 0,
      combat: 0
    },
    appearance: {
      gender: "Female",
      race: null,
      height: ["1", "1 cm"],
      weight: ["1", "1 kg"],
      eyeColor: "Brown",
      hairColor: "Black"
    },
    biography: {
      fullName: "Unknown",
      alterEgos: "Unknown",
      aliases: ["Unknown"],
      placeOfBirth: "-",
      firstAppearance: "Unknown",
      publisher: "Unknown",
      alignment: "Unknown"
    },
    work: {
      occupation: "-",
      base: "-"
    },
    connections: {
      groupAffiliation: "Unknown",
      relatives: "Unknown"
    },
    images: {
      md: "https://community.algolia.com/marvel-search/img/hit-default.jpg"
    }
  }
};

export default HeroCard;
