import React from 'react';
import Util from '../Util';

export default function CardItem({ article, searchTerm }) {
  return (
    <li className="card">
      <div className="article-title-box">
        <span className="article-title">
          <h2>
            {searchTerm.length > 2
              ? Util.addHighlightsToString(article.title, searchTerm)
              : article.title}
          </h2>
        </span>
      </div>

      {article.url && (
        <a className="article-url" href={article.url} target="_blank">
          <span>
            {article.url.substring(0, 40)}
            {article.url.length > 40 ? '...' : ''}
          </span>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      )}

      <ul className="card-badges">
        <li className="card-badge">
          <i className="fa-solid fa-thumbs-up"></i>
          <span>{article.points}</span>
        </li>
        <li className="card-badge">
          <i className="fa-solid fa-user"></i>
          <span>{article.author}</span>
        </li>
        <li className="card-badge">
          <i className="fa-solid fa-message"></i>
          <span>{article.commentCount}</span>
        </li>
        <li className="card-badge">
          <i className="fa-solid fa-calendar-day"></i>
          <span>{article.age}</span>
        </li>
      </ul>
    </li>
  );
}
