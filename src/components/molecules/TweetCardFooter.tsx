import { Bookmark, Heart, MessageCircle, Repeat } from "lucide-react";
import { TweetCardFooterIcon } from "./TweetCardFooterIcon";

export const TweetCardFooter = () => {
  return (
    <div className="w-full flex justify-between">
      <TweetCardFooterIcon
        className="hover:bg-sky-500/20 hover:text-sky-400"
        icon={<MessageCircle />}
      />
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
