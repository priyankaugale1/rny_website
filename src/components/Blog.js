import React from 'react';
import blogData from '../data/blogData';
import '../styles/Blog.css';

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <h1>✹ Blog</h1>
          <a href="#">view all</a>
        </div>

        {blogData.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-details">
              <p className="blog-date">{blog.date}</p>
              <h2>{blog.title}</h2>
              <div className="blog-tags">
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className="blog-tag">{tag}</span>
                ))}
              </div>
            </div>
            <button className="read-btn">Read</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
