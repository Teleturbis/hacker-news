import React, { useState } from "react";

export default function Filter({
  sortDescendingArticles,
  searchForPost,
  sortNewestArticles,
  sortOldestArticles,
  sortTrendingArticles,
}) {
  const [userInput, setUserInput] = useState("");
  const [newOldFilter, setNewOldFilter] = useState({mode: "newest", text: <i className="fa-solid fa-clock"> <i className="fa-solid fa-arrows-up-down"></i></i>})

  function searchPosts(e) {
    e.preventDefault();

    searchForPost(userInput);
  }

  function toggleNewOldFilter(){

    switch (newOldFilter.mode){

      case "newest":
        setNewOldFilter({mode: "oldest", text: <i className="fa-solid fa-clock"> <i className="fa-solid fa-arrow-up"></i></i>})
        sortNewestArticles();
        break;

      case "oldest":
        setNewOldFilter({mode: "newest", text: <i className="fa-solid fa-clock"> <i className="fa-solid fa-arrow-down-long"></i></i>})
        sortOldestArticles();
        break;

      default:
        break;

    }

  }

  return (
    <div>
      <input
        type="text"
        value={userInput}
        placeholder="Suchen"
        onChange={(e) => setUserInput(e.target.value)}
        className="searchTextInput"
      />
      <input className="searchButton" type="submit" value="Search" onClick={(e) => searchPosts(e)} />

      <div name="filters" className="filters">
        <button onClick={sortDescendingArticles} className="filterButton"><i className="fa-solid fa-thumbs-up"> <i className="fa-solid fa-arrow-up"></i></i></button>
        <button onClick={toggleNewOldFilter} className="filterButton">{newOldFilter.text}</button>
        <button onClick={sortTrendingArticles} className="filterButton"><i className="fa-brands fa-hotjar"></i></button>
      </div>
    </div>
  );
}
