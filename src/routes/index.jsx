import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";

export default function Routes() {
  const routes = createBrowserRouter([{ path: "/", element: <Product /> },{ path: "/checkout", element: <Checkout /> }]);

  return <RouterProvider router={routes} />;
}
