import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import useSeller from "../../Hooks/useSeller";
import { AuthContext } from "../../UserContext/UserContext";

const SellerRoutes = ({ children }) => {
const { user, loading } = useContext(AuthContext);
console.log(user, 'seller user');

  const [isSeller, isSellerLoading] = useSeller(user?.email)
  console.log(isSeller);
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
