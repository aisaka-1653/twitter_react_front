import { Home } from "@/components/pages/Home";
import { Login } from "@/components/pages/Login";
import { Signup } from "@/components/pages/Signup";
import { AuthLayout } from "@/components/templates/AuthLayout";
import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route element={<AuthLayout />}>
        <Route path="users/signup" element={<Signup />} />
        <Route path="users/login" element={<Login />} />
      </Route>
    </Routes>
  );
};
