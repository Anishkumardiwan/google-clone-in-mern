import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage';


// Google-Api-Key = AIzaSyC4yWpBlR5i2k3mFE1tpi7-9_KzanCB3xI

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exe path="/" element={<Home />} />
          <Route exe path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
