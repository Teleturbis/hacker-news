import React, { useState } from "react";

export default function Filter({
  sortAscendingArticles,
  sortDescendingArticles,
  searchForPost,
}) {
  const [userInput, setUserInput] = useState("");

  function searchPosts(e) {
    e.preventDefault();

    searchForPost(userInput);
  }

  return (
    <div>
      <input
        type="text"
        value={userInput}
        placeholder="Suchen"
        onChange={(e) => setUserInput(e.target.value)}
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
