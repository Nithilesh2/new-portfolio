import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
