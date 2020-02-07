import React, { Component } from "react";
import styles from "./style.module.scss";

class Card extends Component {
  render() {
    let data = this.props.characterData;

    let { name, powerstats } = data;
    let height = data.appearance.height[1];
    let weight = data.appearance.weight[1];
    let srcImg = data.images.lg;
    let { publisher } = data.biography;

    return (
      <figure
        className={
          publisher === "DC Comics" ? styles.dc_comics : styles.marvel_comics
        }
      >
        <div>
          <img src={srcImg} alt={name} />
        </div>

        <figcaption className={styles.card_caption}>
          <h1 className={styles.card_name}>{name}</h1>
          <h3 className={styles.card_type}>{publisher}</h3>

          <table className={styles.card_stats}>
            <tbody>
              {Object.keys(powerstats).map(key => {
                return (
                  <tr key={key}>
                    <th>{key.toUpperCase()}</th>
                    <td>{powerstats[key]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className={styles.card_abilities}>
            <h4 className={styles.card_ability}>
              <span className={styles.card_label}>Height</span>
              {height}
            </h4>

            <h4 className={styles.card_ability}>
              <span className={styles.card_label}>Weight</span>
              {weight}
            </h4>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default Card;
