import React, { useState } from 'react';
import LoginModal from './LoginModal'; // Import the LoginModal component

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {showModal && !isLoggedIn && (
        <LoginModal
          onClose={() => setShowModal(false)}
          onLogin={handleLoginSuccess}
        />
      )}
      {!isLoggedIn ? (
        <div>
          <h2>Admin Page</h2>
          <p>Please log in to access the admin page.</p>
          <button onClick={() => setShowModal(true)}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Admin Dashboard</h2>
          <p>Welcome to the admin dashboard!</p>
          <button onClick={handleLogout}>Logout</button>
          {/* Admin functionalities here */}
        </div>
      )}
    </div>
  );
};

export default Admin;
