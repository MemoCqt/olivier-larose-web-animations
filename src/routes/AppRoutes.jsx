import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import TextParallax from "../pages/TextParallax/TextParallax.jsx";
import PerspectiveSectionTransition from "../pages/PerspectiveSectionTransition/PerspectiveSectionTransition.jsx";
import TextAlongPath from "../pages/TextAlongPath/TextAlongPath.jsx";
import BackgroundImageParallax from "../pages/BackgroundImageParallax/BackgroundImageParallax.jsx";
import NotFound from "../pages/NotFound.jsx";

const routingTable = createBrowserRouter([
  {
    path: "/",
    element: <App />, // always displayed
    errorElement: <NotFound />,
    children: [
        { path: "", element: <Home /> },
        { path: "/text-parallax", element: <TextParallax /> },
        { path: "/perspective-section-transition", element: <PerspectiveSectionTransition /> },
        { path: "/text-along-path", element: <TextAlongPath /> },
        { path: "/background-image-parallax", element: <BackgroundImageParallax /> }
    ]
  }
]);

const AppRoutes = () => {
    return (<RouterProvider router={routingTable}/>)
};

export default AppRoutes;