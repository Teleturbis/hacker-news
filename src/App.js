import { useEffect, useState } from "react";
import Article from "./Article";
import CardList from "./components/CardList.jsx";
import FilterSection from "./components/FilterSection.jsx";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = "./data.json";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((u) => {
        populate(u);
      });
  }, []);

  function sortAscendingArticles() {
    let tempArticles = [...articles];

    tempArticles = tempArticles.sort(function (b, a) {
      return a.points - b.points;
    });

    setArticles(tempArticles);
  }

  function sortDescendingArticles() {
    let tempArticles = [...articles];

    tempArticles = tempArticles.sort(function (a, b) {
      return a.points - b.points;
    });

    setArticles(tempArticles);
  }

  const populate = (u) => {
    u.hits.forEach((hit) => {
      const article = new Article(hit);
      setArticles((prevArticles) => [...prevArticles, article]);
    });
  };

  return (
    <div>
      <h1 id="headline">HackerNews</h1>
      <FilterSection
        articles={articles}
        sortAscendingArticles={sortAscendingArticles}
        sortDescendingArticles={sortDescendingArticles}
      />
      <CardList articles={articles} />
    </div>
  );
}

export default App;
