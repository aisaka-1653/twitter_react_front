import { Bookmark, Heart, Repeat } from "lucide-react";
import { CommentForm } from "../orgranisms/form/CommentForm";
import { Tweet } from "@/types/tweet";
import { TweetCardFooterButton } from "./TweetCardFooterButton";

type TweetCardFooterProps = {
  tweet: Tweet;
  retweetClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
};

export const TweetCardFooter: React.FC<TweetCardFooterProps> = (props) => {
  const { tweet, retweetClick } = props;
  const {
    engagement: { retweet },
  } = tweet;
  const iconSize = "w-4";

  return (
    <div className="w-full flex justify-between">
      <CommentForm tweet={tweet} />
      <TweetCardFooterButton
        onClick={retweetClick}
        variant="retweet"
        isActive={retweet.retweeted}
      >
        <Repeat className={iconSize} />
        <span>{retweet.count || ""}</span>
      </TweetCardFooterButton>
      <TweetCardFooterButton className="hover:bg-rose-500/5 hover:text-rose-400">
        <Heart className={iconSize} />
      </TweetCardFooterButton>
      <TweetCardFooterButton className="hover:bg-amber-500/5 hover:text-amber-400">
        <Bookmark className={iconSize} />
      </TweetCardFooterButton>
    </div>
  );
};
