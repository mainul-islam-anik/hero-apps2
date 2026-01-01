import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AppDetails from '../Pages/AppDetails/AppDetails';
import AllApps from '../Pages/AllApps/AllApps';
import Installation from '../Pages/Installation/Installation';
import ErrorApp from '../Pages/ErrorApp/ErrorApp';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            loader: ()=>fetch('/appsData.json'),
            path: "/",
            Component: Home
        },
        {
          path: '/allapps',
          loader: ()=>fetch('/allAppsData.json'),
          
          Component: AllApps
        },
        {
          path: '/appDetails/:id',
          loader: ()=>fetch('/allAppsData.json'),
          errorElement: <ErrorApp></ErrorApp>,
          Component: AppDetails
        },
        {
          path: '/installation',
          loader: ()=>fetch('/allAppsData.json'),
          Component: Installation
        }
    ]
  },
]);