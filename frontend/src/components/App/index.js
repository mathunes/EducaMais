import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Authors from '../../pages/Authors';
import Resources from '../../pages/Resources';
import Events from '../../pages/Events';
import Courses from '../../pages/Courses';
import NotFound from '../../pages/NotFound';
import ResourceDetails from '../../pages/ResourceDetails';
import EditResource from '../../pages/EditResource';
import NewResource from '../../pages/NewResource';
import NewAuthor from '../../pages/NewAuthor';
import EditAuthor from '../../pages/EditAuthor';
import AuthorDetails from '../../pages/AuthorDetails';
import NewCourse from '../../pages/NewCourse';
import EditCourse from '../../pages/EditCourse';

import './styles.css';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path={process.env.PUBLIC_URL + "/"} element={<Home />} />
            <Route exact path={process.env.PUBLIC_URL + "/autores"} element={<Authors />} />
            <Route exact path={process.env.PUBLIC_URL + "/autor/editar"} element={<EditAuthor />} />
            <Route exact path={process.env.PUBLIC_URL + "/autor/detalhes"} element={<AuthorDetails />} />
            <Route exact path={process.env.PUBLIC_URL + "/autor/adicionar"} element={<NewAuthor />} />
            <Route exact path={process.env.PUBLIC_URL + "/recursos"} element={<Resources />} />
            <Route exact path={process.env.PUBLIC_URL + "/recurso/detalhes"} element={<ResourceDetails />} />
            <Route exact path={process.env.PUBLIC_URL + "/recurso/editar"} element={<EditResource />} />
            <Route exact path={process.env.PUBLIC_URL + "/recurso/adicionar"} element={<NewResource />} />
            <Route exact path={process.env.PUBLIC_URL + "/eventos"} element={<Events />} />
            <Route exact path={process.env.PUBLIC_URL + "/cursos"} element={<Courses />} />
            <Route exact path={process.env.PUBLIC_URL + "/curso/editar"} element={<EditCourse />} />
            <Route exact path={process.env.PUBLIC_URL + "/curso/adicionar"} element={<NewCourse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
