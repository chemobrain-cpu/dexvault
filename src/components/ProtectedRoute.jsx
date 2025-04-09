// components/ProtectedRoute.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { userToken } = useSelector(state => state.userAuth);

  if (!userToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
