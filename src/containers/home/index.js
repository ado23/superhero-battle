import React, { Component, Fragment } from "react";
import "./style.scss";
// import Card from "../../components/card";
// import characters from "../../api/characters";
// import Navbar from "../../components/navbar";
// import DefaultCard from "../../components/defaultCard";
// import SuperheroBattle from "../../containers/superheroBattle";
import allCharacters from "../../api/allCharacters";
import AutocompleteInput from "../../components/autocompleteInput";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    let onlyNames = allCharacters.map(character => {
      return character.name;
    });

    this.setState({
      ...this.state,
      characters: onlyNames
    });
  }
  render() {
    return (
      <div className="probni">
        <AutocompleteInput options={this.state.characters}></AutocompleteInput>
      </div>
      /**  <Fragment>
         <Navbar />
         <div>
          {characters.map(character => {
            return <Card key={character.id} characterData={character} />;
          })}
        </div> 
        <DefaultCard />
         <SuperheroBattle /> 

        
       </Fragment>*/
    );
  }
}

export default Home;
