import {createBrowserRouter} from "react-router-dom"

import Footer from "../components/footer/index.js";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div></div>,
    },
    {
      path: "/api",
      element: <Footer />,
    },
]);

export default router;