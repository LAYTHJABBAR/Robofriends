import React, { Component } from "react";
import CardList from "./cardList";
 import Scroll from './Scroll'
import Search from "./search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = event => {
    console.log(event, "hihihihi");
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
        <Scroll >
        <CardList robots={filterRob} />
        </Scroll>
      </div>
    );
  }
}

export default App;
