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
import EditResource from '../../pages/EditResource';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path={process.env.PUBLIC_URL + "/"} element={<Home />} />
            <Route exact path={process.env.PUBLIC_URL + "/autores"} element={<Authors />} />
            <Route exact path={process.env.PUBLIC_URL + "/recursos"} element={<Resources />} />
            <Route exact path={process.env.PUBLIC_URL + "/recursos/detalhes"} element={<ResourceDetails />} />
            <Route exact path={process.env.PUBLIC_URL + "/recursos/editar"} element={<EditResource />} />
            <Route exact path={process.env.PUBLIC_URL + "/eventos"} element={<Events />} />
            <Route exact path={process.env.PUBLIC_URL + "/cursos"} element={<Courses />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
