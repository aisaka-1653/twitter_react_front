import xIcon from "../../assets/xIcon.svg";
import { SignupForm } from "../orgranisms/form/SignupForm";

export const Signup = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <img src={xIcon} alt="xIcon" className="w-6" />
      </div>
      <h2 className="text-2xl font-bold my-8">アカウントを作成</h2>
      <SignupForm />
    </>
  );
};
