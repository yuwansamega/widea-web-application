import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Router>
    
    </>
  )
}

export default App