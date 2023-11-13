import React, { useEffect, useState } from "react";
import ThemeSwitcher from "../Components/ThemeSwitcher";

export default {
  title: "Components/ThemeSwitcher",
  component: ThemeSwitcher,
};

const Template = (args) => {
  const [isDarkMode, setIsDarkMode] = useState(args?.isDarkMode);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    setIsDarkMode(args?.isDarkMode);
  }, [args]);

  return (
    <div
      style={
        isDarkMode
          ? { backgroundColor: "black", color: "white", height: "100vh" }
          : null
      }
    >
      <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
};

export const Dark = Template.bind({});
Dark.args = {
  isDarkMode: true,
};

export const Light = Template.bind({});
Light.args = {
  isDarkMode: false,
};
