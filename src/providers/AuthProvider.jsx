"use client";

import React from "react";
import { useState } from "react";
import { Auth } from "../context/index";
import { useContext } from "react";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : false,
  );
  return <Auth.Provider value={{ auth, setAuth }}>{children}</Auth.Provider>;
};

export default AuthProvider;

export const useAuth = () => useContext(Auth);
