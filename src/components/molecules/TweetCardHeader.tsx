import { useNavigate } from "react-router-dom";
import { TweetMoreDropdown } from "../orgranisms/TweetMoreDropdown";
import { FC } from "react";
import { Button } from "../ui/button";
import { Tweet } from "@/types/tweet";
import { KeyedMutator } from "swr";

type TweetUserInfoProps = {
  tweet: Tweet;
  mutate: KeyedMutator<any>;
};

export const TweetCardHeader: FC<TweetUserInfoProps> = ({ tweet, mutate }) => {
  const { user } = tweet;
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
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
      <TweetMoreDropdown tweet={tweet} mutate={mutate} />
    </div>
  );
};
