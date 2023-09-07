import React from "react";
import { LoginComponent } from "../components/LoginComponent";
import { useAuth } from "../context/AuthContext";

export const LoginPage = () => {
  const authContext = useAuth();
  console.log(authContext);

  return <LoginComponent />;
};
