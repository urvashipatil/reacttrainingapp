import React, { lazy } from "react";
import "./App.css";
import ThemeProvider from "./context/theme-provider";
import EasyButton from "./components/easy-button";
// const PostList = lazy(() => import("./components/postfile"));
import PostList from "./components/postfile";
import CounterApp from "./components/useCallback/counter-app";
import EcommerceApp from "./components/ecommerce/ecommerce-app";

function App() {
  return (
    <ThemeProvider>
      {/* <div className="App">
        <EasyButton>CLick here</EasyButton>
        <PostList></PostList>
        <CounterApp />
      </div> */}
      <EcommerceApp></EcommerceApp>
    </ThemeProvider>
  );
}

export default App;
