import { FC, Fragment, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Fragment>{children}</Fragment>;
  }

  return <Navigate to="/login" replace />;
};
