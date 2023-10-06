import { Route, Routes } from "react-router-dom";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";

export default function RouteList() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Product />}
      />
      <Route
        path="/checkout"
        element={<Checkout />}
      />
    </Routes>
  );
}
