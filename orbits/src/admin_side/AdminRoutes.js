import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./Login/AdminLogin";
import AdminRegister from "./Register/AdminRegister";
import Home from "./Home/Home";
import { Homepage_protection, Loginpageprotection } from "./Route_protection";
import AddCategory from "./Add_category/AddCategory";
import AddProduct from "./Product/AddProduct";
import ShowProduct from "./ShowProduct/ShowProduct";

function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="/admin-login"
        element={
          <Loginpageprotection>
            <AdminLogin />
          </Loginpageprotection>
        }
      />
      <Route
        path="/admin-signup"
        element={
          <Loginpageprotection>
            <AdminRegister />
          </Loginpageprotection>
        }
      />
      <Route
        path="/admin-home"
        element={
          <Homepage_protection>
            <Home />
          </Homepage_protection>
        }
      />
      <Route
        path="/admin-addcategory"
        element={
          <Homepage_protection>
            <AddCategory />
          </Homepage_protection>
        }
      />
      <Route
        path="/admin-addproduct/:id"
        element={
          <Homepage_protection>
            <AddProduct />
          </Homepage_protection>
        }
      />
      <Route
        path="/admin-showproduct/:id"
        element={
          <Homepage_protection>
            <ShowProduct />
          </Homepage_protection>
        }
      />
    </Routes>
  );
}

export default AdminRoutes;
