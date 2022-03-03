import { useEffect, useState } from 'react';
import Article from './Article';
import User from './User';
import CardList from './components/CardList.jsx';
import FilterSection from './components/FilterSection.jsx';
import NoResultsDisplay from './components/NoResultsDisplay';
import LoadingScreen from './components/LoadingScreen.jsx';
import Modal from './components/Modal';

function App() {
  /***************************/
  /*     vvv SATES vvv       */
  /***************************/

  const [articles, setArticles] = useState([]);
  const [backupArticles, setBackupArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [noResultFound, setNoResultFound] = useState(false);
  const [counter, setCounter] = useState(1);
  const [selectedUser, setSelectedUser] = useState();

  /********************************/
  /*      vvv USEEFFECTS vvv      */
  /********************************/

  useEffect(() => {
    const url = 'http://hn.algolia.com/api/v1/search?page=1';

    fetchData(url);
  }, []);

  useEffect(() => {
    let url = `http://hn.algolia.com/api/v1/search?page=${counter}`;
    fetchData(url);
  }, [counter]);

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

  function sortDescendingArticles() {
    let tempArticles = [...backupArticles];

    tempArticles = tempArticles.sort(function (a, b) {
      return a.points - b.points;
    });

    setArticles(tempArticles);
  }

  function sortNewestArticles() {
    let tempArticles = [...backupArticles];

    tempArticles = tempArticles.sort(function (a, b) {
      return a.ageInt - b.ageInt;
    });
  }

  function searchForPost(str) {
    setSearchTerm(str);
    const url = `http://hn.algolia.com/api/v1/search?query=${str}`;

    fetchData(url);

    if (articles.length <= 0) {
      setNoResultFound(true);
    }
  }

  function sortOldestArticles() {
    let tempArticles = [...backupArticles];

    tempArticles = tempArticles.sort(function (b, a) {
      return a.ageInt - b.ageInt;
    });

    setArticles(tempArticles);
  }

  function sortTrendingArticles() {
    setBackupArticles([...articles]);

    let tempArticles = [...articles];

    tempArticles = tempArticles.filter(
      (article) => article.ageInt < 2592000000 * 12
    );

    tempArticles = tempArticles.sort(function (a, b) {
      // 2592000000 = 1 Monat in ms
      return a.ageInt / a.points - b.ageInt / b.points;
    });

    setArticles(tempArticles);
  }

  /***************************/
  /*     vvv PAGES vvv       */
  /***************************/

  function nextPageHandler() {
    setCounter(counter + 1);
  }

  function prevPageHandler() {
    if (counter <= 1) {
      return;
    } else {
      setCounter(counter - 1);
    }
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
    setBackupArticles(a);

    setIsLoading(false);

    if (a.length <= 0) {
      setNoResultFound(true);
    } else {
      setNoResultFound(false);
    }
  };

  function fetchUserData(name) {
    let url = `http://hn.algolia.com/api/v1/users/${name}`;

    //setIsLoading(true);

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        setSelectedUser(new User(jsonResponse));
      })
      .catch((err) => console.error(err));
  }

  /*****************************/
  /*      vvv RETURN vvv       */
  /*****************************/

  return (
    <>
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
            <CardList
              articles={articles}
              searchTerm={searchTerm}
              fetchUserData={fetchUserData}
            />
          )}
        </section>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            margin: '2rem 0'
          }}
        >
          <button
            onClick={() => prevPageHandler()}
            disabled={counter == 1 ? true : false}
          >
            Previous Page
          </button>
          <button onClick={() => nextPageHandler()}>Next Page</button>
        </div>
      </div>
      <Modal selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
    </>
  );
}

export default App;
