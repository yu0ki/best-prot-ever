import React from 'react';
import './App.css';
import Top from "./pages/Top";
import Novels from './pages/Novels';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 主にルーティングに使用
function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Top />}>
        </Route>

        <Route path="/novels" element={<Novels />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
