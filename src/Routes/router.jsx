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
        element:<Home></Home>,
        loader:()=>fetch("https://protfolio-server-jade.vercel.app/projects")
      },
      {
        path:"project-details/:id",
        element:<ProjectDetails></ProjectDetails>,
        loader:({params})=>fetch(`https://protfolio-server-jade.vercel.app/${params.id}`)
      },
      {
        path:"all-projects",
        element:<AllProjects></AllProjects>,
         loader:()=>fetch("https://protfolio-server-jade.vercel.app/all-projects")
      }
    ]
  },
]);

export default router