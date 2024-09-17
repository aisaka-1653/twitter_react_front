import { Card, CardContent } from "@/components/ui/card";
import { Tweet } from "@/types/tweet";
import { FC } from "react";
import { TweetCardHeader } from "../molecules/TweetCardHeader";
import { UserAvatar } from "../atoms/UserAvatar";
import { TweetCardFooter } from "../molecules/TweetCardFooter";
import { TweetCardImage } from "../atoms/TweetCardImage";
import { Link } from "react-router-dom";

type TweetCardProps = {
  tweet: Tweet;
};

export const TweetCard: FC<TweetCardProps> = ({ tweet }) => {
  return (
    <Link to={`/tweets/${tweet.id}`}>
      <Card className="border-b-[1px] border-slate-600 hover:bg-accent/30">
        <CardContent className="px-4 pt-3">
          <div className="flex gap-2">
            <div className="pt-1">
              <Link to={`/users/${tweet.user.id}`}>
                <UserAvatar url={tweet.user.avatar_url} />
              </Link>
            </div>
            <div className="flex flex-col size-full">
              <TweetCardHeader user={tweet.user} />
              <p className="whitespace-pre text-wrap break-words">
                {tweet.content}
              </p>
              <TweetCardImage imageUrl={tweet.image_url} className="my-3" />
              <TweetCardFooter />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
