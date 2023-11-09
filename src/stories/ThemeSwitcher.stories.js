import React, { useState } from "react";
import ThemeSwitcher from "../Components/ThemeSwitcher";

export default {
  title: "ThemeSwitcher",
  component: ThemeSwitcher,
};

const Template = (args) => {
  const [isDarkMode, setIsDarkMode] = useState(args?.isDarkMode);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />;
};

export const Default = Template.bind({});
Default.args = {
  isDarkMode: true,
};
