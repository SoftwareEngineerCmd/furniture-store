import { FC, Fragment, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export const PublicComponent: FC<PropsWithChildren> = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Fragment>{children}</Fragment>;
  } else {
    return <Navigate to="/admin-panel" replace />;
  }
};
