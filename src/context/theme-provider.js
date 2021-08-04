import React, { useState } from "react";
import ThemeContext from "../context/theme-context";

export default function ThemeProvider(props) {
  const [theme, setTheme] = useState("light");
  return <ThemeContext.Provider value={[theme, setTheme]} {...props} />;
}
