import {
  createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import ProjectDetails from "../Pages/ProjectDetails";
import AllProjects from "../Pages/AllProjects";
import Error from "../Pages/Error";
import Loading from "../Components/Loading";

const router = createBrowserRouter ([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        index:true,
        element:<Home></Home>,
        loader:()=>fetch("https://protfolio-server-jade.vercel.app/projects"),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path:"project-details/:id",
        element:<ProjectDetails></ProjectDetails>,
        loader:({params})=>fetch(`https://protfolio-server-jade.vercel.app/${params.id}`),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path:"all-projects",
        element:<AllProjects></AllProjects>,
         loader:()=>fetch("https://protfolio-server-jade.vercel.app/all-projects"),
         hydrateFallbackElement:<Loading></Loading>
      }
    ]
  },
]);

export default router