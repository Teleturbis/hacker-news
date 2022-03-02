import { useEffect, useState } from "react";
import Article from "./Article";
import CardList from "./components/CardList.jsx";
import FilterSection from "./components/FilterSection.jsx";
import NoResultsDisplay from "./components/NoResultsDisplay";
import LoadingScreen from "./components/LoadingScreen.jsx";

function App() {
  /***************************/
  /*     vvv SATES vvv       */
  /***************************/

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noResultFound, setNoResultFound] = useState(false);

  /********************************/
  /*    vvv INITIAL FETCH vvv     */
  /********************************/

  useEffect(() => {
    const url = "http://hn.algolia.com/api/v1/search?page=1";

    fetchData(url);
  }, []);

  /***************************/
  /*    vvv SEARCH vvv       */
  /***************************/

  function searchForPost(searchText) {
    const url = `http://hn.algolia.com/api/v1/search?query=${searchText}`;

    fetchData(url);
  }

  /***************************/
  /*      vvv SORT vvv       */
  /***************************/

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

  function sortNewestArticles() {
    let tempArticles = [...articles];

    tempArticles = tempArticles.sort(function (a, b) {
      return a.ageInt - b.ageInt;
    });

    setArticles(tempArticles);
  }

  function sortOldestArticles() {
    let tempArticles = [...articles];

    tempArticles = tempArticles.sort(function (b, a) {
      return a.ageInt - b.ageInt;
    });

    setArticles(tempArticles);
  }

  function sortTrendingArticles() {
    let tempArticles = [...articles];

    tempArticles.forEach((el) => {
      })

    tempArticles = tempArticles.sort(function (a, b) {
      if(a.ageInt <= (2592000000*12)){    // 2592000000 = 1 Monat in ms
        return a.points / a.ageInt - b.points / b.ageInt;
      }
    return null;
    });

    setArticles(tempArticles);
  }

  /***************************/
  /*     vvv FETCH vvv       */
  /***************************/

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

  const populate = (u) => {
    let a = [];

    u.hits.forEach((hit) => {
      if (!hit.title) return;

      const article = new Article(hit);

      a.push(article);
    });
    setArticles(a);

    setIsLoading(false);

    if (a.length <= 0) {
      setNoResultFound(true);
    } else {
      setNoResultFound(false);
    }
  };

  /*****************************/
  /*      vvv RETURN vvv       */
  /*****************************/

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
          sortNewestArticles={sortNewestArticles}
          sortOldestArticles={sortOldestArticles}
          sortTrendingArticles={sortTrendingArticles}
        />
      </div>
      <section className="container-list">
        {isLoading ? (
          <LoadingScreen />
        ) : noResultFound ? (
          <NoResultsDisplay />
        ) : (
          <CardList articles={articles} />
        )}
      </section>
    </div>
  );
}

export default App;
