import React from 'react';
import { Navigate } from "react-router-dom";
import { githubPage } from '../../utils/constants.js';

const ProtectedRouteElement = ({ element: Component, ...props  }) => {
  return (
    props.loggedIn ? <Component {...props} /> : <Navigate to={`${githubPage}/`} replace/>
)}

export default ProtectedRouteElement;