import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Statistics from './Components/Statistics';
import Cards from './Components/cards'; 
import Profile from './Components/Profile' 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}  />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
