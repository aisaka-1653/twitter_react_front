import { Outlet } from "react-router-dom";
import { Sidebar } from "../orgranisms/Sidebar";
import { Aside } from "../orgranisms/Aside";

export const ThreeColumnLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
      <Aside />
    </div>
  );
};
