import { useNavigate } from "react-router-dom";
import { TweetMoreDropdown } from "../orgranisms/TweetMoreDropdown";
import { FC } from "react";
import { Button } from "../ui/button";
import { Tweet } from "@/types/tweet";

type TweetUserInfoProps = {
  tweet: Tweet;
};

export const TweetCardHeader: FC<TweetUserInfoProps> = ({ tweet }) => {
  const { user } = tweet;
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`/users/${user.id}`);
  };

  return (
    <div className="flex justify-between items-center gap-1 text-sm">
      <div>
        <Button
          variant="link"
          size="bare"
          className="font-bold"
          onClick={handleClick}
        >
          {user.display_name}
        </Button>
        <span className="text-muted-foreground ml-1">
          {`@${user.username}`}
        </span>
      </div>
      <TweetMoreDropdown tweet={tweet} />
    </div>
  );
};
