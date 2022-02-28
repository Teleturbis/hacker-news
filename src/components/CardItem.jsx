import React from 'react';

export default function CardItem({ article }) {
  if (!article.url) {
    // console.log(article);
  }

  return (
    <li className="card">
      <div className="article-title-box">
        <a className="article-title" href={article.url} target="_blank">
          <h2>{article.title}</h2>
        </a>
      </div>
      {/* <p className="articleDescription"></p> */}

      <ul className="card-badges">
        <li className="card-badge">
          <i className="fa-solid fa-thumbs-up"></i>
          <span>{article.points}</span>
        </li>
        <li className="card-badge">
          <i className="fa-solid fa-user"></i>
          <span>{article.author}</span>
        </li>
        {/* <li className="card-badge">Created at: {article.date}</li> */}
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
