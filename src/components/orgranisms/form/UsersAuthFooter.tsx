import { CustomLink } from "@/components/atoms/CustomLink";
import { FC } from "react";
import { useLocation } from "react-router-dom";

export const UserAuthFooter: FC = () => {
  const location = useLocation();

  return (
    <div className="flex justify-center">
      <p className="text-slate-300 mt-8">
        {location.pathname === "/users/signup" ? (
          <>
            アカウントをお持ちの場合{" "}
            <CustomLink to="/users/login">ログイン</CustomLink>
          </>
        ) : (
          <>
            アカウントをお持ちでない場合{" "}
            <CustomLink to="/users/signup">アカウント作成</CustomLink>
          </>
        )}
      </p>
    </div>
  );
};
