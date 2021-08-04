import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EasyButton from "../components/easy-button";
import ThemeProvider from "../context/theme-provider";

function CustomeRenderWithTheme(ui) {
  const Wrapper = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
  };

  return render(ui, { wrapper: Wrapper });
}

test("renders learn react link", () => {
  const Wrapper = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
  };

  render(<EasyButton>CLick here</EasyButton>, { wrapper: Wrapper });
  //OR CustomeRenderWithTheme(<EasyButton>CLick here</EasyButton>);
  console.log(screen.debug());
  userEvent.click(screen.getByRole("button"));
  console.log(screen.debug());
  expect(screen.getByRole("button").className).toBe("dark");
});

test("renders learn react link", () => {
  render(
    <ThemeProvider>
      <EasyButton>CLick here</EasyButton>
    </ThemeProvider>
  );
  console.log(screen.debug());
});
