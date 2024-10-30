import { UserProfile } from "@/components/pages/UserProfile";
import { Home } from "@/components/pages/Home";
import { Login } from "@/components/pages/Login";
import { Signup } from "@/components/pages/Signup";
import { TweetDetail } from "@/components/pages/TweetDetail";
import { AuthLayout } from "@/components/templates/AuthLayout";
import { ThreeColumnLayout } from "@/components/templates/ThreeColumnLayout";
import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route element={<ThreeColumnLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="tweets/:tweetId" element={<TweetDetail />} />
        <Route path="users/:userId" element={<UserProfile />} />
      </Route>
      <Route path="users" element={<AuthLayout />}>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
