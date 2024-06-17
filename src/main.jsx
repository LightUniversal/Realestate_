import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginScreen from "./Components/Login.jsx";
import RegisterScreen from "./Components/Register.jsx";
import About from "./Components/About.jsx";

import App from "./App.jsx";
import "./index.css";
import Main from "./Components/Main.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<Main />}></Route>

      <Route path="/register" element={<RegisterScreen />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/login" element={<LoginScreen />}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
