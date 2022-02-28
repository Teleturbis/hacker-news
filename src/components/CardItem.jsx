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

      <div className="card-badges">
        <p className="card-badge">Points: {article.points}</p>
        <p className="card-badge">Author: {article.author}</p>
        <p className="card-badge">Created at: {article.date}</p>
        <p className="card-badge">Comments: {article.commentCount}</p>
        <p className="card-badge">Posted: {article.age}</p>
      </div>
    </li>
  );
}
