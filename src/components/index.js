import React, { Component } from "react";

class Dohvati extends Component {
  componentDidMount() {
    fetch("https://www.superheroapi.com/api.php/1759899007474589/686")
      .then(res => res.json())
      .then(result => {
        console.log("RESULT:", result);
      });
  }
  render() {
    return (
      <div>
        <p>RADIM</p>
      </div>
    );
  }
}

export default Dohvati;
