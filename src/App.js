import React, { Component } from "react";
import "./App.css";
import Card from "./components/card";
import characters from "./api/characters";

class App extends Component {
  render() {
    return (
      <div>
        {characters.map(character => {
          return <Card key={character.id} characterData={character} />;
        })}
      </div>
    );
  }
}

export default App;
