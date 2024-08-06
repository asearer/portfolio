import React, { useState } from 'react';
import './AdminPage.css'; // Ensure your styles are imported

const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [pubDate, setPubDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!title || !link || !description || !pubDate) {
      setMessage('Please fill in all fields.');
      return;
    }

    // Here you would typically handle the form submission,
    // such as sending data to an API or updating state in a global store.
    
    // For now, we'll just log the new post data
    console.log({ title, link, description, pubDate });

    // Clear the form and show a success message
    setTitle('');
    setLink('');
    setDescription('');
    setPubDate('');
    setMessage('Blog post created successfully!');
  };

  return (
    <div className="admin-page">
      <h2>Create New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="link">Link:</label>
          <input
            type="url"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pubDate">Publication Date:</label>
          <input
            type="date"
            id="pubDate"
            value={pubDate}
            onChange={(e) => setPubDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Post</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default AdminPage;
