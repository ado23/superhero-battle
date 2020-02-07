import React, { Component } from "react";
import styles from "./styles.module.scss";

class SuperheroBattle extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let name = event.target.value;
    fetch(
      `https://www.superheroapi.com/api.php/1759899007474589/search/${name}`
    )
      .then(res => res.json())
      .then(result => {
        console.log("RESULT:", result);
      });
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label style={{ color: "blue", marginRight: "10px" }}>
          Name
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            style={{ marginLeft: "10px" }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SuperheroBattle;
