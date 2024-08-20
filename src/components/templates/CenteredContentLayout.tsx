import { Outlet } from "react-router-dom";

export const CenteredContentLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 max-w-md">
        <Outlet />
      </div>
    </div>
  );
};
