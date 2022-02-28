import React from 'react';

export default function CardItem({ article }) {
  if (!article.url) {
    // console.log(article);
  }

  return (
    <li className="article-card">
      <div className="article-title-box">
        <a className="article-title" href={article.url} target="_blank">
          <h2>{article.title}</h2>
        </a>
      </div>
      {/* <p className="articleDescription"></p> */}
      <p className="articleDetails">Points: {article.points}</p>
      <p className="articleDetails">Author: {article.author}</p>
      <p className="articleDetails">Created at: {article.date}</p>
      <p className="articleDetails">Comments: {article.commentCount}</p>
      <p className="articleDetails">Posted: {article.age}</p>
    </li>
  );
}
