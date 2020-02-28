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
        onChange={darkMode.toggle}
        checked={!darkMode.value}
        speed={1.5}
        size={50}
      />
    </div>
  );
};

export default DarkMode;
