import React from 'react';
import RssFeed from './RssFeed';
import BlogPosts from './BlogPosts';
import './Blog.css'; // Ensure your styles are imported

const Blog = () => {
  return (
    <section id="blog">
      <h2>Blog</h2>
      <div className="blog-container">
        <RssFeed />
        <BlogPosts />
      </div>
    </section>
  );
};

export default Blog;










