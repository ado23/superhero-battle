import React, { Component } from "react";
import HeroCard from "../../components/heroCard";
import heroes from "../../api/characters";

class Heroes extends Component {
  render() {
    return <HeroCard heroData={heroes} />;
  }
}

export default Heroes;
