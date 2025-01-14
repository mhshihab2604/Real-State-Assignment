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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { Toaster } from 'sonner';
import AboutUs from './Components/AboutUs/AboutUs';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import Gallery from './Components/Gallery/Gallery';
import UserProfile from './Components/UserProfile/UserProfile';

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
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
        loader: () => fetch("state.json")
      },
      {
        path: "/gallery",
        element: <PrivateRoute>
            <Gallery></Gallery>
        </PrivateRoute>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/userProfile",
        element: <PrivateRoute>
          <UserProfile></UserProfile>
        </PrivateRoute>
      },
      {
        path: "/updateProfile",
        element: <PrivateRoute>
            <UpdateProfile></UpdateProfile>
        </PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/residential/:id",
        element: <PrivateRoute>
          <ResidentialDetails></ResidentialDetails>
        </PrivateRoute>,
        loader: () => fetch("../state.json")
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <FirebaseProvider>
    <Toaster position='top-center'></Toaster>
    <RouterProvider router={router} />
   </FirebaseProvider>
  </React.StrictMode>,
)
 