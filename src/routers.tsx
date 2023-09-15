import { createBrowserRouter } from "react-router-dom";
import Dashboard from 'views/Dashboard/Dashboard';
import ProductList from 'views/Products/ProductList';
import ProductEdit from 'views/Products/ProductEdit';
import ProductNew from "views/Products/ProductNew";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/products",
    element: <ProductList />,
  },
  {
    path: "/products/edit",
    element: <ProductEdit />,
  },
  {
    path: "/products/new",
    element: <ProductNew />,
  },
]);
export default router;