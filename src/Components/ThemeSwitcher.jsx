import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { ThemeProvider } from "@emotion/react";
import { theme, themeDark } from "../theme";

const ThemeSwitcher = ({ isDarkMode, toggleTheme }) => {
  
  return (
    <ThemeProvider theme={isDarkMode ? themeDark : theme}>
      <FormControlLabel
        control={<Switch checked={isDarkMode} onChange={toggleTheme} />}
        label={isDarkMode ? "Dark Mode" : "Light Mode"}
      />
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
