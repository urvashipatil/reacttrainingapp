import React, { useContext } from "react";
import ThemeContext from "../context/theme-context";

export default function EasyButton() {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <button
      className={theme}
      onClick={() => {
        setTheme("dark");
      }}
    >
      CLick Here
    </button>
  );
}
