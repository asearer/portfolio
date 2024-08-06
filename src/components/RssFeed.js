import React, { useState, useEffect } from 'react';
import './Blog.css'; // Ensure your styles are imported

const RssFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mock RSS feed data for debugging
    const fetchPosts = async () => {
      try {
        // Simulate fetching RSS feed (mock data)
        const mockRssResponse = `
          <rss version="2.0">
            <channel>
              <title>Mock Blog</title>
              <link>https://example.com</link>
              <description>Mock RSS feed for debugging</description>
              <item>
                <title>Mock RSS Post 1</title>
                <link>https://example.com/mock-rss-post-1</link>
                <description>This is a mock description for RSS post 1.</description>
                <pubDate>${new Date().toUTCString()}</pubDate>
              </item>
              <item>
                <title>Mock RSS Post 2</title>
                <link>https://example.com/mock-rss-post-2</link>
                <description>This is a mock description for RSS post 2.</description>
                <pubDate>${new Date().toUTCString()}</pubDate>
              </item>
            </channel>
          </rss>
        `;

        const parser = new DOMParser();
        const xml = parser.parseFromString(mockRssResponse, 'text/xml');
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
    <div className="container rss-feed-container">
      <h3>RSS Feed</h3>
      {posts.length === 0 ? (
        <p>No RSS blog posts available.</p>
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
  );
};

export default RssFeed;
