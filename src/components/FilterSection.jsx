import React, { useState } from "react";

export default function Filter({
  sortAscendingArticles,
  sortDescendingArticles,
  searchText,
}) {
  const [userInput, setUserInput] = useState("");

  function searchPosts(e) {
    e.preventDefault();

    searchText(userInput);
  }

  function searchText(e) {
    setUserInput(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={userInput.searchBar}
        placeholder="Suchen"
        onChange={(e) => searchText(e)}
      />
      <input type="submit" value="Search" onClick={(e) => searchPosts(e)} />
      <button onClick={sortAscendingArticles}>Points Descending</button>
      <button onClick={sortDescendingArticles}>Points Ascending</button>
    </div>
  );
}

/*

    -alter
    -points         CHECKED
    -hot
    -comments

    -searchbar

*/
