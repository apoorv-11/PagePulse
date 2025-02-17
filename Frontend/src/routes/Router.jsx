import { createBrowserRouter } from "react-router-dom";
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>Home Page</h1>,
      },
      {
        path: "/orders",
        element: <h1>Orders Page</h1>,
      },
    ],
  },
]);

export default router;
