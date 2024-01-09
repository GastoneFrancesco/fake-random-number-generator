import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import { HomePageComponent } from './components/HomePageComponent';
import { CheatComponent } from './components/CheatComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home-page" />} />
        <Route exact path="/home-page" element={<HomePageComponent />} />
        <Route exact path="/cheat-page" element={<CheatComponent />} />
      </Routes>
    </Router>
  );
}

export default App;