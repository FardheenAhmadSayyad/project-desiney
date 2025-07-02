// File: src/components/Footer.js

import React from "react";
import './styles/Footer.css'; // ✅ Import the plain CSS

function Footer() {
  return (
    <footer className="custom-footer">
      <p>&copy; {new Date().getFullYear()} DesineyWorld. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
