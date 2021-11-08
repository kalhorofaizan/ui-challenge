import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import C1 from './c1/Home';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/c1' element={<C1/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
