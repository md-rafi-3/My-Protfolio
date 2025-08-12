import {
  createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import ProjectDetails from "../Pages/ProjectDetails";
import AllProjects from "../Pages/AllProjects";

const router = createBrowserRouter ([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:"project-details",
        element:<ProjectDetails></ProjectDetails>
      },
      {
        path:"all-projects",
        element:<AllProjects></AllProjects>
      }
    ]
  },
]);

export default router