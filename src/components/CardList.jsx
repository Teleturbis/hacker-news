import React from 'react';
import CardItem from './CardItem.jsx';

export default function CardList({ articles, searchTerm }) {
  return (
    <ul className="cards-list" style={{ listStyleType: 'none' }}>
      {articles.map((article) => (
        <CardItem article={article} searchTerm={searchTerm} key={article.id} />
      ))}
    </ul>
  );
}
