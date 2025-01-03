import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from '../Pages/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { loader, user } = useContext(AuthContext)
  const loacation = useLocation()

  if (loader) {
    <Loading></Loading>
  }

  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate to='/signin' state={{from: loacation}} replace ></Navigate>
    </div>
  );
};

export default PrivateRoute;