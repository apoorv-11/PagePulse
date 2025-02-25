/* eslint-disable react/prop-types */
import { useAuth } from "../Context/auth.context.jsx";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  if (currentUser) {
    return children;
  }

  if (loading) {
    return <div>Loading ... </div>;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
