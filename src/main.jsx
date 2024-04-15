import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
  // createBrowserRouter,
} from "react-router-dom";
// import router from './routers/router.jsx';
import router from './routers/Router.jsx';

// const router = createBrowserRouter([
//   {
//       path: "/",
//       element: <div>Hello world!</div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
