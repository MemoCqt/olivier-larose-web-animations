import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import TextParallax from "../pages/TextParallax.jsx";
import NotFound from "../pages/NotFound.jsx";

const routingTable = createBrowserRouter([
  {
    path: "/",
    element: <App />, // always displayed
    errorElement: <NotFound />,
    children: [
        { path: "", element: <Home /> },
        { path: "/text-parallax", element: <TextParallax /> }
    ]
  }
]);

const AppRoutes = () => {
    return (<RouterProvider router={routingTable}/>)
};

export default AppRoutes;