import { useEffect, useState } from "react";
import Article from "./Article";
import CardList from "./components/CardList.jsx";
import FilterSection from "./components/FilterSection.jsx";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noResultFound, setNoResultFound] = useState(false);

  useEffect(() => {
    const url = "http://hn.algolia.com/api/v1/search?page=1";

    fetchData(url);
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
    let a = [];

    u.hits.forEach((hit) => {
      if (!hit.title) return;

      const article = new Article(hit);

      a.push(article);
    });
    setArticles(a);
    setIsLoading(false);
  };

  function searchForPost(searchText) {
    const url = `http://hn.algolia.com/api/v1/search?query=${searchText}`;

    fetchData(url);

    if (articles.length <= 0) {
      setNoResultFound(true);
    }
  }

  function fetchData(url) {
    setIsLoading(true);

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        populate(jsonResponse);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="content">
      <section id="headline">
        <h1>
          Hacker
          <i className="fa-solid fa-user-secret fa-xs"></i>News
        </h1>
        <h2>Your one stop shop for only the hackiest hacker news</h2>
      </section>
      <div className="container-filter">
        <FilterSection
          sortDescendingArticles={sortDescendingArticles}
          sortAscendingArticles={sortAscendingArticles}
          searchForPost={searchForPost}
        />
      </div>
      <section className="container-list">
        {isLoading ? (
          <div>
            <img src="http://i.stack.imgur.com/SBv4T.gif" width="250" />{" "}
            <p style={{ textAlign: "center", fontSize: "3rem" }}>
              Site is loading...
            </p>
          </div>
        ) : (
          noResultFound ? null : <CardList articles={articles} />
        )}
      </section>
    </div>
  );
}

export default App;
