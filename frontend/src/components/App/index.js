import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';

import './styles.css';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
