import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import UserContext, { AuthContext } from "../../../UserContext/UserContext";
import Loading from "../../Loading/Loading";

const Adminroutes = ({ children }) => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  console.log(isAdmin);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loading />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default Adminroutes;
