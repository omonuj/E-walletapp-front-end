import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Statistics from './Components/Statistics';
import Cards from './Components/cards';  
import Profile from './Components/Profile';
import Scanner from './Components/Scanner';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}  />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/scanner" element={<Scanner />} />
      </Routes>
    </Router>
  );
};

export default App;
