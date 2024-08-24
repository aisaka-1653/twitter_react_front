import { FC, ReactNode } from "react";
import xIcon from "../../assets/xIcon.svg";

type AuthHeaderProps = {
  children: ReactNode;
};

export const AuthHeader: FC<AuthHeaderProps> = ({ children }) => {
  return (
    <>
      <div className="w-full flex justify-center mb-4">
        <img src={xIcon} alt="xIcon" className="w-6" />
      </div>
      <h2 className="text-2xl font-bold my-8">{children}</h2>
    </>
  );
};
