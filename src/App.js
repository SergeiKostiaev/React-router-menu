import React from'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import HomePage from './Components/HomePage';
import DriftPage from './Components/DriftPage';
import ForzaPage from './Components/ForzaPage';
import TimeAttackPage from './Components/TimeAttackPage';

export default function App() {
  return (
      <BrowserRouter>
              <Menu/>
              <div className="page">
                  <Routes>
                      <Route path="/drift" element={<DriftPage/>}/>
                      <Route path="/timeattack" element={<TimeAttackPage/>}/>
                      <Route path="/forza" element={<ForzaPage/>}/>
                      <Route path="*" element={<HomePage/>}/>
                  </Routes>
              </div>
      </BrowserRouter>
  );
}