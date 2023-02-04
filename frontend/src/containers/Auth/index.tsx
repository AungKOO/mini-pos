import React from "react";
import Home from "../Home";
import Login from "../Login";

const Auth = () => {
  const token = localStorage.getItem("token");
  return <>{(token !== null) ? <Home /> : <Login />}</>;
};
export default Auth;
