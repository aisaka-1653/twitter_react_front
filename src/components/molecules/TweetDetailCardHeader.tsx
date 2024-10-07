import { useNavigate } from "react-router-dom";
import { TweetMoreDropdown } from "../orgranisms/TweetMoreDropdown";
import { User } from "@/types/user";
import { FC } from "react";
import { Button } from "../ui/button";
import { UserAvatar } from "../atoms/UserAvatar";

type TweetUserInfoProps = {
  user: User;
};

export const TweetDetailCardHeader: FC<TweetUserInfoProps> = ({ user }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`/users/${user.id}`);
  };

  return (
    <div className="flex justify-between items-center gap-1 text-sm">
      <div className="flex items-center gap-2">
        <UserAvatar user={user} />
        <div className="flex flex-col items-start">
          <Button
            variant="link"
            size="bare"
            className="font-bold"
            onClick={handleClick}
          >
            {user.display_name}
          </Button>
          <span className="text-muted-foreground">{`@${user.username}`}</span>
        </div>
      </div>
      <TweetMoreDropdown user={user} />
    </div>
  );
};
