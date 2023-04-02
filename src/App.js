import React from 'react';
import './App.css';
import Top from "./pages/Top";
import Novels from './pages/novels/Novels';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Prot from './pages/prot/Prot';

// 主にルーティングに使用
function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Top />}>
        </Route>

        <Route path="/novels" element={<Novels />}>
          {/* プロット詳細ページ */}
          <Route path=":id" element={<Prot />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
