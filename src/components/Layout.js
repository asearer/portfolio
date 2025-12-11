import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css';

const Layout = ({ children }) => (
  <div className="layout-wrapper">
    <Header />
    <main className="main-content">
      {/* We can remove Container if we want full width heroes, or keep it for content pages. 
            Since Home has hero, we might want to let children handle container if needed, 
            or use a fluid container. For now, removing the wrapping Container here gives more control to pages.
        */}
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
