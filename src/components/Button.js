// File: src/components/Button.js

import React from "react";
import './styles/Button.css'; // ✅ Import the plain CSS

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="custom-button">
      {children}
    </button>
  );
}

export default Button;
