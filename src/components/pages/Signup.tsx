import { AuthHeader } from "../molecules/AuthHeader";
import { SignupForm } from "../orgranisms/form/SignupForm";

export const Signup = () => {
  return (
    <>
      <AuthHeader>
        アカウントを作成
      </AuthHeader>
      <SignupForm />
    </>
  );
};
