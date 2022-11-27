import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import useSeller from "../../Hooks/useSeller";
import { AuthContext } from "../../UserContext/UserContext";

const SellerRoutes = ({ children }) => {
const { user, loading } = useContext(AuthContext);

  const [isSeller, isSellerLoading] = useSeller(user?.email)
  const location = useLocation();

  if (loading || isSellerLoading) {
    return <Loading />;
  }
  if (user && isSeller) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default SellerRoutes;
