import React from 'react';
import './Blog.css'; // Ensure your styles are imported

const BlogPosts = () => {
  // Mock blog posts for debugging
  const mockPosts = [
    {
      title: 'Mock Blog Post 1',
      link: '#',
      description: 'This is a mock description for blog post 1. It helps in debugging layout issues.',
      pubDate: new Date().toISOString()
    },
    {
      title: 'Mock Blog Post 2',
      link: '#',
      description: 'This is a mock description for blog post 2. It helps in debugging layout issues.',
      pubDate: new Date().toISOString()
    }
  ];

  return (
    <div className="container blog-section-container">
      <h3>Mock Blog Posts</h3>
      {mockPosts.map((post, index) => (
        <div key={index} className="blog-card">
          <h3><a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a></h3>
          <p>{post.description}</p>
          <p><em>Published on: {new Date(post.pubDate).toLocaleDateString()}</em></p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
