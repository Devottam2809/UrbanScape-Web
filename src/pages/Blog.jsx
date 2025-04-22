import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import "./BlogSection.css";

function Blog() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  // Fetch news from the web
  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=smart-home-ai&sortBy=publishedAt&pageSize=5&page=${page}&apiKey=ba5e4b6855984320bcd315a14a44fc70`
      );
      setArticles((prev) => [...prev, ...response.data.articles]);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  // Infinite Scroll Logic
  const lastArticleRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <section className="blog-section">
      <h2 className="blog-title">Latest AI Trends in Smart Homes</h2>
      <div className="blog-container">
        {articles.map((article, index) => (
          <div
            key={index}
            className="blog-card animate-scroll"
            ref={index === articles.length - 1 ? lastArticleRef : null}
          >
            <img src={article.urlToImage} alt={article.title} className="blog-img" />
            <div className="blog-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
      {loading && <p className="loading-text">Loading more news...</p>}
    </section>
  );
}

export default Blog;