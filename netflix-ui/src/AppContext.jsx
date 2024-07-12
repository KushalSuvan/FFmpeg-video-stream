import React from "react";
import { app } from "./firebaseConfig";
import { getAuth } from "firebase/auth";

const AppContext = React.createContext(app);
const AuthContext = React.createContext(getAuth(app));

export { AppContext, AuthContext };
