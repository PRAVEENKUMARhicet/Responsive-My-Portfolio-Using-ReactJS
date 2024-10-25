import './App.css';
import React from 'react';
import Components from './Pages/Home/HomeScreen/index';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './Pages/Home/Navbar';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Components />} exact></Route>
            <Route path="*" element={<div id="error">404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
