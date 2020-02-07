import React, { Component } from "react";
import styles from "./style.module.scss";
import fajl from "../../api/characters";

class DefaultCard extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.container_main}>
          {fajl.map(character => {
            return (
              <div className={styles.card}>
                <img
                  className={styles.imgSrc}
                  src={character.images.md}
                  alt="ss"
                />
                <h2>{character.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DefaultCard;
