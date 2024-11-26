import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Battle from './pages/Battle';
import Decks from './pages/Decks';
import CardLibrary from './pages/CardLibrary';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/decks" element={<Decks />} />
          <Route path="/cards" element={<CardLibrary />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;