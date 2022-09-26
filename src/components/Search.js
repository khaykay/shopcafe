import React from "react";
import "../styles/Search.css";
import Card from "./Card";
function Search() {
  return (
    <Card className="search_bar">
      <label for="search_input" className="search_label">
        Find the best <br />
        coffee for you
      </label>
      <input
        type="text"
        name="search_input"
        id="search_input"
        placeholder="find your coffee"
      ></input>
    </Card>
  );
}

export default Search;
