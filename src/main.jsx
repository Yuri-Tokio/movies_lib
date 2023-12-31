import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Search from './pages/Search'

import "./Styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/movies_lib/" element={<Home />} />
          <Route path="/movies_lib/movie/:id" element={<Movie />} />
          <Route path="/movies_lib/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);