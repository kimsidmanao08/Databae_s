import React, { useState, useRef, useEffect } from "react";
import "./act2.css";

const BatBae = () => {
  
  const [isDark, setIsDark] = useState(true);

  const clickCount = useRef(0);

  useEffect(() => {
    console.log("Theme updated!");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    clickCount.current += 1;
    
  };

  let message = "";
  if (clickCount.current === 0) {
    message = "Click the button to start!";
  } else {
    message = `You have toggled ${clickCount.current} times.`;
  }

  return (
    
    <div className={`app-container ${isDark ? "dark" : "light"}`}>
      
      {/* Ternary for Text */}
      <h1>
        {isDark ? " Black Black Black " : "White White White"}
      </h1>

      <button onClick={toggleTheme}>
        {isDark ? "Light" : "Dark"} Mode
      </button>

      {/* Requirement: Logical && Operator */}
      {clickCount.current > 0 && (
        <p className="message-text">{message}</p>
      )}
    </div>
  );
};

export default BatBae;