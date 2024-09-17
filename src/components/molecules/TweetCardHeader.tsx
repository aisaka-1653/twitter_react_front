import { Link } from "react-router-dom";
import { TweetMoreDropdown } from "../orgranisms/TweetMoreDropdown";
import { User } from "@/types/user";
import { FC } from "react";

type TweetUserInfoProps = {
  user: User;
};

export const TweetCardHeader: FC<TweetUserInfoProps> = ({ user }) => {
  return (
    <div className="flex justify-between items-center gap-1 text-sm">
      <div>
        <Link to={`/users/${user.id}`} className="font-bold hover:underline">
          {user.display_name}
        </Link>
        <span className="text-muted-foreground ml-1">
          {`@${user.username}`}
        </span>
      </div>
      <TweetMoreDropdown user={user} />
    </div>
  );
};
