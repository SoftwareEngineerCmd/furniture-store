import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./common/components/ProtectComponent";
import { AdminPanel } from "./admin-panel/AdminPanel";
import { PublicComponent } from "./common/components/PublicComponent";
import { Login } from "./user-auth/components/Login";
import { Register } from "./user-auth/components/Register";

export const FurnitureStore = () => {
  const token = localStorage.getItem("token");
  return (
    <Routes>
      <Route
        path="/admin-panel"
        element={
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        }
      />

      <Route
        path="/login"
        element={
          <PublicComponent>
            <Login />
          </PublicComponent>
        }
      />
      <Route
        path="/register"
        element={
          <PublicComponent>
            <Register />
          </PublicComponent>
        }
      />

      <Route
        path="*"
        element={<Navigate to={token ? "/" : "/login"} replace />}
      />
    </Routes>
  );
};
