import React from "react";
import { useRoutes } from "react-router-dom";

const useRoutesCustom = () => {
  const routes = useRoutes();
  return routes;
};

export default useRoutesCustom;
