import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

// COMPONENT QUE SERVEIX PER PROTEGIR RUTES
export const ProtectedRouteComponent = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading</h1>;

  if (!user) return <Navigate to={"/"}></Navigate>;

  return <>{children}</>;
};
