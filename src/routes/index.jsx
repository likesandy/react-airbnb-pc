import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("@/views/home"));
const Homes = lazy(() => import("@/views/homes"));
const Rooms = lazy(() => import("@/views/rooms"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/homes",
    element: <Homes />,
  },
  {
    path: "/rooms",
    element: <Rooms />,
  },
];

export default routes;
