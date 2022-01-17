import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Authors from '../../pages/Authors';
import Resources from '../../pages/Resources';
import Events from '../../pages/Events';
import Courses from '../../pages/Courses';
import NotFound from '../../pages/NotFound';

import './styles.css';
import ResourceDetails from '../../pages/ResourceDetails';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/autores" element={<Authors />} />
            <Route exact path="/recursos" element={<Resources />} />
            <Route exact path="/recursos/detalhes" element={<ResourceDetails />} />
            <Route exact path="/eventos" element={<Events />} />
            <Route exact path="/cursos" element={<Courses />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
