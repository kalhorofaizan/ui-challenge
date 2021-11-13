import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import C1 from './c1/Home';
import C2 from './c2/Home';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/c1' element={<C1/> } />
          <Route path='/c2' element={<C2/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
