import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUpLayout from "./layouts/SignUpLayout";

import "./index.css";
import Registration from "./pages/SignUp/Registration.jsx";
import RegistrationForm from "./pages/SignUp/RegistrationForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUpLayout />}>
            <Route path="registration" element={<Registration />}></Route>
            <Route path="regform" element={<RegistrationForm />} />
          </Route>
          <Route path="login" element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
