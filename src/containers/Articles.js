import React, { useState } from 'react';
import Article from '../components/Article/Article';
import AddArticle from '../components/AddArticle/AddArticle';

const Articles = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: 'post 1', body: 'Der Artikel Nummer 1' },
    { id: 2, title: 'post 1', body: 'Der Artikel Nummer 2' }
  ]);

  const saveArticle = e => {
    e.preventDefault();
  };

  return (
    <div>
      <AddArticle saveArticle={saveArticle} />
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
