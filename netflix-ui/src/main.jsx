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
import VerifyEmail from "./pages/SignUp/VerifyEmail.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import PlanForm from "./pages/SignUp/PlanForm.jsx";

import SignOut from "./pages/SignOut/SignOut.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUpLayout />}>
            <Route index element={<SignUp />} />
            <Route path="registration" element={<Registration />} />
            <Route path="regform" element={<RegistrationForm />} />
            <Route path="verifyemail" element={<VerifyEmail />} />
            <Route path="planform" element={<PlanForm />} />
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signout" element={<SignOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
