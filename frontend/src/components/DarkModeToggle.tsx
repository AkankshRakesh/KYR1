import React, { useState, useEffect } from "react";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for stored theme preference in localStorage on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    // Save the theme to localStorage
    if (newDarkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      {/* Hidden checkbox that drives the toggle functionality */}
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        className="sr-only peer"
      />
      {/* Toggle switch UI */}
      <div className="relative w-14 h-8 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:bg-blue-600 transition-colors">
        <div
          className={`absolute top-0.5 left-0.5 w-7 h-7 flex items-center justify-center rounded-full transition-transform ${
            isDarkMode ? "translate-x-6" : ""
          }`}
        >
          {/* Icons without background */}
          {isDarkMode ? (
            <span role="img" aria-label="moon" className="text-lg">
              🌙
            </span>
          ) : (
            <span role="img" aria-label="sun" className="text-lg">
              ☀️
            </span>
          )}
        </div>
      </div>
    </label>
  );
};

export default DarkModeToggle;
