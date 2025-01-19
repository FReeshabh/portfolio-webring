import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Webring from './components/Webring';
import './App.css'; // Optional: Import global or app-specific CSS

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* Route for the Home Page */}
      <Route path="/" element={<Home />} />

      {/* Route for the Webring Page */}
      <Route path="/webring" element={<Webring />} />
    </Routes>
  </BrowserRouter>
);

export default App;