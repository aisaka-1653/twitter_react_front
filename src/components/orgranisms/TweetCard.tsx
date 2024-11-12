import { Card, CardContent } from "@/components/ui/card";
import { Tweet } from "@/types/tweet";
import { FC } from "react";
import { TweetCardHeader } from "../molecules/TweetCardHeader";
import { UserAvatar } from "../atoms/UserAvatar";
import { TweetCardFooter } from "../molecules/TweetCardFooter";
import { TweetCardImage } from "../atoms/TweetCardImage";
import { useNavigate } from "react-router-dom";
import { KeyedMutator } from "swr";
import { createRetweet } from "@/apis/retweet";
import { toast } from "sonner";

type TweetCardProps = {
  tweet: Tweet;
  mutate: KeyedMutator<any>;
};

export const TweetCard: FC<TweetCardProps> = ({ tweet, mutate }) => {
  const { user, id, content, image_url } = tweet;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tweets/${id}`);
  };

  const retweetClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await createRetweet(id);
      toast.success("リツイートしました");
    } catch {
      toast.error("リツイートに失敗しました");
    }
  };

  return (
    <div onClick={handleClick}>
      <Card className="cursor-pointer border-b-[1px] border-slate-600 hover:bg-accent/30">
        <CardContent className="px-4 pt-3">
          <div className="flex gap-2">
            <div className="pt-1">
              <UserAvatar user={user} />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <TweetCardHeader tweet={tweet} mutate={mutate} />
              <p className="whitespace-pre text-wrap break-words">{content}</p>
              <TweetCardImage imageUrl={image_url} className="my-3" />
              <TweetCardFooter tweet={tweet} retweetClick={retweetClick} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
