import { Navigate } from "react-router-dom";

const Homepage_protection = ({ childrens, ...rest }) => {
  const user = localStorage.getItem("accessToken") || null;

  return user ? (
    <childrens {...rest} />
  ) : (
    <Navigate to="/admin/admin-login" replace />
  );
};

const Loginpageprotection = ({ children }) => {
  const user = localStorage.getItem("accessToken") || null;

  return user === null ? children : <Navigate to="/admin/admin-home" replace />;
};

export { Homepage_protection, Loginpageprotection };
