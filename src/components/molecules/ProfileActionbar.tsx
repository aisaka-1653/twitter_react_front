import { Mail } from "lucide-react";
import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";
import { useFollowActions } from "@/hooks/useFollowActions";

type ProfileActionbarProps = {
  userId: string;
  following: boolean;
  className?: string;
};

export const ProfileActionbar: React.FC<ProfileActionbarProps> = (props) => {
  const { userId, following, className } = props;
  const { isFollow, handleFollowClick, handleUnfollowClick } = useFollowActions(userId, following);

  return (
    <div className={twMerge("flex items-start gap-2", className)}>
      <Button
        variant="circle"
        size="icon"
        className="border-[1px] border-slate-600"
      >
        <Mail className="w-5 h-5" />
      </Button>
      {isFollow ? (
        <Button
          variant="inverse"
          size="md"
          className="text-[15px] font-bold rounded-full h-9"
          onClick={handleUnfollowClick}
        >
          フォロー中
        </Button>
      ) : (
        <Button
          size="md"
          className="text-[15px] font-bold rounded-full h-9"
          onClick={handleFollowClick}
        >
          フォロー
        </Button>
      )}
    </div>
  );
};
