import React, { useState, useEffect } from 'react';
import './Blog.css'; // Ensure your styles are imported

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blog posts from an RSS feed or API
    const fetchPosts = async () => {
      try {
        // Example RSS feed URL (replace with your actual feed URL)
        const response = await fetch('https://example.com/rss-feed');
        if (!response.ok) throw new Error('Network response was not ok');
        const text = await response.text();
        // Parse RSS feed (this example assumes using xml2js or similar)
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const items = xml.querySelectorAll('item');
        const postsArray = Array.from(items).map(item => ({
          title: item.querySelector('title').textContent,
          link: item.querySelector('link').textContent,
          description: item.querySelector('description').textContent,
          pubDate: item.querySelector('pubDate').textContent
        }));
        setPosts(postsArray);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  return (
    <section id="blog">
      <h2>Blog</h2>
      <div className="blog-container">
        {/* Existing feed section */}
        <div className="blog-section">
          <h3>Feed Section</h3>
          {posts.length === 0 ? (
            <p>No blog posts available.</p>
          ) : (
            posts.map((post, index) => (
              <div key={index} className="blog-card">
                <h3><a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a></h3>
                <p>{post.description}</p>
                <p><em>Published on: {new Date(post.pubDate).toLocaleDateString()}</em></p>
              </div>
            ))
          )}
        </div>

        {/* Additional section 1 */}
        <div className="blog-section">
          <h3>Additional Section 1</h3>
          <div className="blog-card">
            <h3>Placeholder Title 1</h3>
            <p>Placeholder for additional blog posts or content.</p>
          </div>
        </div>

        {/* Additional section 2 */}
        <div className="blog-section">
          <h3>Additional Section 2</h3>
          <div className="blog-card">
            <h3>Placeholder Title 2</h3>
            <p>Placeholder for additional blog posts or content.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;




