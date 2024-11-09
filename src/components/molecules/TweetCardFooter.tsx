import { Bookmark, Heart, Repeat } from "lucide-react";
import { CommentForm } from "../orgranisms/form/CommentForm";
import { Tweet } from "@/types/tweet";
import { TweetCardFooterButton } from "./TweetCardFooterButton";

type TweetCardFooterProps = {
  tweet: Tweet;
};

export const TweetCardFooter: React.FC<TweetCardFooterProps> = ({ tweet }) => {
  const iconSize = "w-4";

  return (
    <div className="w-full flex justify-between">
      <CommentForm tweet={tweet} />
      <TweetCardFooterButton className="hover:bg-green-500/5 hover:text-green-400">
        <Repeat className={iconSize} />
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
