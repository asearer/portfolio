import React from 'react';
import './Contact.css'; // Ensure your styles are imported

const Contact = () => (
  <section id="contact">
    <h2>Contact</h2>
    <div className="contact-form-container">
      <form action="mailto:asearerdev@gmail.com" method="post" encType="text/plain">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </section>
);

export default Contact;

