import React from "react";

const Footer = () => {
  return (
    <footer className="text-light text-center py-3 mt-5" style={{ backgroundColor: "orange" }}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Foody. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;