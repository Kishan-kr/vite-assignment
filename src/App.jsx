// src/App.js
import React from 'react';
import { RouterProvider } from "react-router-dom";
import routerObject from './utilities/routerObject';
import './app.css'

function App() {
  const router = routerObject();

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
