import React, { Component } from "react";
import styles from "./style.module.scss";

class Navbar extends Component {
  render() {
    return (
      <div className={styles.topnav}>
        <a href="#home">Home</a>
        <a href="#news">Heroes</a>
        <a href="#contact">Superhero Battle</a>
        <a href="#contact">Team Battle</a>
        <a href="#contact">About</a>
      </div>
    );
  }
}

export default Navbar;
