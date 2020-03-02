import React, {useState } from "react";
import useDarkMode from "use-dark-mode";
import DarkModeToggle from "react-dark-mode-toggle";


const DarkMode = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <DarkModeToggle
        // onChange={darkMode.toggle}
        // checked={darkMode.value}
        checked={darkMode.value}
        onChange={darkMode.toggle}
        speed={1.5}
        size={50}
      />
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
    </div>
  );
};

export default DarkMode;
