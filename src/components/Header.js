import React from 'react';

export const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="toggle"
      >
        Toggle
      </button>
    </div>
  );
};
