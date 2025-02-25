import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Login/Register.jsx";
import CartPage from "../pages/Cart/CartPage.jsx";
import CheckOut from "../pages/Cart/CheckOut.jsx";
import SingleBook from "../pages/Books/SingleBook.jsx";
import PrivateRoute from "./PrivateRoutes.jsx";
import Order from "../pages/Cart/Order.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
    ],
  },
]);

export default router;
