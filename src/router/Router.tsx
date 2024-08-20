import { Login } from "@/components/pages/Login";
import { Signup } from "@/components/pages/Signup";
import { CenteredContentLayout } from "@/components/templates/CenteredContentLayout";
import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route element={<CenteredContentLayout />}>
        <Route path="users/signup" element={<Signup />} />
        <Route path="users/login" element={<Login />} />
      </Route>
    </Routes>
  );
};
