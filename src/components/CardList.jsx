import React from 'react';
import CardItem from './CardItem.jsx';

export default function CardList({ articles, searchTerm, fetchUserData }) {
  return (
    <ul className="cards-list" style={{ listStyleType: 'none' }}>
      {articles.map((article) => (
        <CardItem article={article} searchTerm={searchTerm} fetchUserData={fetchUserData} key={article.id} />
      ))}
    </ul>
  );
}
