import {
  createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home";

const router = createBrowserRouter ([
  {
    path: "/",
    index:true,
    element:<Home></Home>,
  },
]);

export default router