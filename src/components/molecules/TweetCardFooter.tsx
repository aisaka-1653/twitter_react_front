import { Bookmark, Heart, Repeat } from "lucide-react";
import { TweetCardFooterIcon } from "./TweetCardFooterIcon";
import { CommentForm } from "../orgranisms/form/CommentForm";
import { Tweet } from "@/types/tweet";

type TweetCardFooterProps = {
  tweet: Tweet;
};

export const TweetCardFooter: React.FC<TweetCardFooterProps> = ({ tweet }) => {
  return (
    <div className="w-full flex justify-between">
      <CommentForm tweet={tweet} />
      <TweetCardFooterIcon
        className="hover:bg-green-500/20 hover:text-green-400"
        icon={<Repeat />}
      />
      <TweetCardFooterIcon
        className="hover:bg-rose-500/20 hover:text-rose-400"
        icon={<Heart />}
      />
      <TweetCardFooterIcon
        className="hover:bg-amber-500/20 hover:text-amber-400"
        icon={<Bookmark />}
      />
    </div>
  );
};
