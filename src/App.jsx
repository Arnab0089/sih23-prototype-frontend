import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Stats from "./pages/Stats";
import Assistant from "./pages/Assistant";
import Add from "./pages/Add";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add" element={<Add />} />
          <Route path="/assistant" element={<Assistant />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
