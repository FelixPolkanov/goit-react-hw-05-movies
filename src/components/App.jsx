import { Route, Routes } from "react-router-dom";
import {Layout } from './SharedLayout/SharedLayout'
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
// import { Home } from '../pages/Home'
// import { Movies } from '../pages/Movies'

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));


export const App = () => {
  return (
     <>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Home/>} />
          <Route path="movies" element={<Movies />} />
           <Route path="/movies/:id" element={<div>MoviesDetails</div>}> 
             {/* <Route path="cast" element={<Cast/>} />
                 <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound/>} /> */}
          </Route >
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
