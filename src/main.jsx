import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import router from './router/index.jsx'
import {RouterProvider} from "react-router-dom";
import {ContextProvider} from "./contexts/AuthContext.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ContextProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
      </ContextProvider>
  </React.StrictMode>,
)
