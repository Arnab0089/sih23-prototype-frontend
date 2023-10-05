import { useState, useContext, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { store } from "./store";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Stats from "./pages/Stats";
import Assistant from "./pages/Assistant";
import Add from "./pages/Add";
import { Provider } from "react-redux";

const colorTheme = {
  primary: "blue",
  secondary: "red",
};

export const ThemeContext = createContext(colorTheme);

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add" element={<Add />} />
            <Route path="/assistant" element={<Assistant />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
