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
import AdminRoute from "./AdminRoute.jsx";
import AdminLogin from "../components/AdminLogin.jsx";
import DashboardLayout from "../pages/admin/DashboardLayout.jsx";
import Dashboard from "../pages/admin/Dashboard.jsx";
import ManageBooks from "../pages/admin/ManageBooks.jsx";
import AddBook from "../pages/admin/AddBook.jsx";
import UpdateBook from "../pages/admin/UpdateBook.jsx";

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
        path: "/orders",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <div>About</div>,
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
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "add-new-book",
        element: (
          <AdminRoute>
            <AddBook />
          </AdminRoute>
        ),
      },
      {
        path: "edit-book/:id",
        element: (
          <AdminRoute>
            <UpdateBook />
          </AdminRoute>
        ),
      },
      {
        path: "manage-books",
        element: (
          <AdminRoute>
            <ManageBooks />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
