import React, { Component } from "react";
import CardList from "./cardList";
import robots from "./robo";
import Search from "./search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ""
    };
  }
  onSearchChange = event => {
      console.log(event, 'hihihihi')
    this.setState({ searchField: event.target.value });
  };
  render() {
    const filterRob = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>ReboFriend</h1>
        <Search searchChange={this.onSearchChange} />
        <CardList robots={filterRob} />
      </div>
    );
  }
}

export default App;
