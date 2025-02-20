import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import HomeRoute from './routes/HomeRoute';
import CountriesRoute from './routes/CountriesRoute';
import CountryRoute from './routes/CountryRoute';
import CountriesProvider from './context/CountriesContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomeRoute /> },
      { path: 'countries', element: <CountriesRoute /> },
      { path: 'countries/:countryName', element: <CountryRoute /> }, 
    ], 
  },
]); 

export default function App() {
  return (
    <CountriesProvider>
      <RouterProvider router={router} />
    </CountriesProvider>
  );
}

