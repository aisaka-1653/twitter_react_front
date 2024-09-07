import { Outlet } from "react-router-dom";
import { FC } from "react";
import { Sidebar } from "../orgranisms/Sidebar";
import { Aside } from "../orgranisms/Aside";

export const ThreeColumnLayout: FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
      <Aside />
    </div>
  );
};
