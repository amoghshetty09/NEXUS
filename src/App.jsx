// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import QnA from './components/QnA';

const App = () => (
    <Router>
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/qna" element={<QnA />} />
            </Routes>
        </main>
        <Footer />
    </Router>
);

export default App;
