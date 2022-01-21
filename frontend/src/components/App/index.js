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
import CourseDetails from '../../pages/CourseDetails';
import AuthorDetails from '../../pages/AuthorDetails';
import NewCourse from '../../pages/NewCourse';
import EditCourse from '../../pages/EditCourse';

import './styles.css';
import NewEvent from '../../pages/NewEvent';
import EditEvent from '../../pages/EditEvent';
import EventDetails from '../../pages/EventDetails';

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path={"/autores"} element={<Authors />} />
            <Route exact path={"/autor/editar"} element={<EditAuthor />} />
            <Route exact path={"/autor/detalhes"} element={<AuthorDetails />} />
            <Route exact path={"/autor/adicionar"} element={<NewAuthor />} />
            <Route exact path={"/recursos"} element={<Resources />} />
            <Route exact path={"/recurso/detalhes"} element={<ResourceDetails />} />
            <Route exact path={"/recurso/editar"} element={<EditResource />} />
            <Route exact path={"/recurso/adicionar"} element={<NewResource />} />
            <Route exact path={"/eventos"} element={<Events />} />
            <Route exact path={"/evento/detalhes"} element={<EventDetails />} />
            <Route exact path={"/evento/editar"} element={<EditEvent />} />
            <Route exact path={"/evento/adicionar"} element={<NewEvent />} />
            <Route exact path={"/cursos"} element={<Courses />} />
            <Route exact path={"/curso/detalhes"} element={<CourseDetails />} />
            <Route exact path={"/curso/editar"} element={<EditCourse />} />
            <Route exact path={"/curso/adicionar"} element={<NewCourse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
