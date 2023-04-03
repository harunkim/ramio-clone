import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import About from "./About";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Hero />
      <Routes>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container available");
}

const root = createRoot(container);
root.render(<App />);
