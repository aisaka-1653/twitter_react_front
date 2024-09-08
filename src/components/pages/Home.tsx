import { TweetForm } from "../orgranisms/form/TweetForm";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";

export const Home = () => {
  const { logout } = useAuth();

  return (
    <div>
      <TweetForm />
      <Button onClick={logout}>仮ログアウト</Button>
    </div>
  );
};
