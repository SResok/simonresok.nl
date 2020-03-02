import React, {useState } from "react";
import useDarkMode from "use-dark-mode";


const DarkMode = () => {
  const darkMode = useDarkMode(false);

  return (
      <div className="darkContainer">
        <div className="switch">
          <label htmlFor="toggle">
            <input
              id="toggle"
              className="toggle-switch"
              type="checkbox"
              checked={!darkMode.value}
              onChange={darkMode.toggle}
            />
            <div className="sun-moon">
              <div className="dots"></div>
            </div>
            <div className="background">
              <div className="stars1"></div>
              <div className="stars2"></div>
            </div>
            <div className="fill"></div>
          </label>
        </div>
      </div>
  );
};

export default DarkMode;
