import { AuthHeader } from "../molecules/AuthHeader";
import { LoginForm } from "../orgranisms/form/LoginForm";

export const Login = () => {
  return (
    <>
      <AuthHeader>Xにログイン</AuthHeader>
      <LoginForm />
    </>
  );
};
