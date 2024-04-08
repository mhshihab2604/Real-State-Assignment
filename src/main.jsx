import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import ResidentialDetails from './Components/ResidentialDetails/ResidentialDetails';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("state.json")
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/residential/:id",
        element: <ResidentialDetails></ResidentialDetails>,
        loader: () => fetch("../state.json")
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <FirebaseProvider>
    <RouterProvider router={router} />
   </FirebaseProvider>
  </React.StrictMode>,
)
