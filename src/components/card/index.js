import React, { Component } from "react";
import "./style.css";

class Card extends Component {
  render() {
    let props = this.props;
    let { name, powerstats } = props.characterData;
    let srcImg = props.characterData.images.lg;
    let { publisher } = props.characterData.biography;
    let { alignment } = props.characterData.biography;
    let height = props.characterData.appearance.height[1];
    let weight = props.characterData.appearance.weight[1];

    return (
      <figure className="card card--water">
        <div>
          <img src={srcImg} alt={name} />
        </div>

        <figcaption className="card__caption">
          <h1 className="card__name">{name}</h1>
          <h3 className="card__type">{publisher}</h3>

          <table className="card__stats">
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

          <div className="card__abilities">
            <h4 className="card__ability">
              <span className="card__label">Height</span>
              {height}
            </h4>

            <h4 className="card__ability">
              <span className="card__label">Weight</span>
              {weight}
            </h4>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default Card;
