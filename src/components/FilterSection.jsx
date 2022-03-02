import React, { useState } from "react";

export default function Filter({
  sortAscendingArticles,
  sortDescendingArticles,
  searchForPost,
  sortNewestArticles,
  sortOldestArticles,
  sortTrendingArticles,
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

      <select name="filters">
        <option onClick={sortAscendingArticles}>Points Descending</option>
        <option onClick={sortDescendingArticles}>Points Ascending</option>
        <option onClick={sortNewestArticles}>Newest</option>
        <option onClick={sortOldestArticles}>Oldest</option>
        <option onClick={sortTrendingArticles}>Trending</option>
      </select>
    </div>
  );
}

/*

    -alter
    -points         CHECKED
    -hot
    -comments

    -searchbar      CHECKED

*/
