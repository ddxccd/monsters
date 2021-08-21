import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this); - binding this to the context on the main compoenet same as using the arrow function
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      // Collect the response from this json website and store it in response variable in json format
      .then((response) => response.json())
      // set monsters ARRAY to the requested json items
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    // { */destructuring an object and storing them in consts */ }
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters</h1>
        {/* // search box input */}
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />

        {/* //HTML element 
        search = changes textinput box to search box
        place holder= default text 
        onChange = something happens when text is changed */}
        <CardList monsters={filteredMonsters} />
        {/* // cardlist component
        passes monsters array from the state INTO the cardlist component */}
      </div>
    );
  }
}

export default App;
