import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SignIn from "../pages/SignIn/SignIn";
import UserTemplate from "../template/UserTemplate/UserTemplate";
import AdminTemplate from "../template/AdminTemplate/AdminTemplate";
import MovieManager from "../pages/MovieManager/MovieManager";
import Addmovie from "../pages/Addmovie/Addmovie";

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <UserTemplate />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/sign-in",
          element: <SignIn />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminTemplate />,
      children: [
        {
          // path: "add-movie",
          element: <Addmovie />,
          index: true,
        },
        {
          path: "movie-manager",
          element: <MovieManager />,
        },
        {
          path: "add-movie",
          element: <Addmovie />,
          index: true,
        },
      ],
    },
  ]);
  return routes;
};

export default useRoutesCustom;
