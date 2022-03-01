import { useEffect, useState } from 'react';
import Article from './Article';
import CardList from './components/CardList.jsx';
import FilterSection from './components/FilterSection.jsx';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = 'http://hn.algolia.com/api/v1/search?page=1';

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((u) => {
        populate(u);
      });
  }, []);

  const populate = (u) => {
    u.hits.forEach((hit) => {
      if (!hit.title) return;

      const article = new Article(hit);
      setArticles((prevArticles) => [...prevArticles, article]);
    });
  };

  return (
    <div>
      <section id="headline">
        <h1>
          Hacker
          <i class="fa-solid fa-user-secret fa-xs"></i>News
        </h1>
        <h2>Your one stop shop for only the hackiest hacker news</h2>
      </section>
      <section className="container-list">
        <CardList articles={articles} />
      </section>
    </div>
  );
}

export default App;
