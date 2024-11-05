import { MoreHorizontal, Trash2, UserX } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { FC } from "react";
import { useCurrentUser } from "@/hooks/uesCurrentUser";
import { tweetDestroy } from "@/apis/tweet";
import { Tweet } from "@/types/tweet";
import { toast } from "sonner";
import { useAllTweets } from "@/hooks/useAllTweets";

type TweetMoreDropdownProps = {
  tweet: Tweet;
};

export const TweetMoreDropdown: FC<TweetMoreDropdownProps> = ({ tweet }) => {
  const { user } = tweet;
  const { currentUser } = useCurrentUser();
  const { mutate } = useAllTweets();
  const isCurrentUser = currentUser?.id === user.id;

  const followClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const tweetDestroyClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await tweetDestroy(tweet.id);
      await mutate();
      toast.success("ツイートを削除しました");
    } catch (error) {
      toast.error("ツイートの削除に失敗しました");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-muted-foreground focus-visible:outline-none">
        <MoreHorizontal className="h-5 w-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-xl shadow-md shadow-white">
        {isCurrentUser ? (
          <DropdownMenuItem className="px-4 py-3 hover:bg-accent hover:text-accent-foreground cursor-pointer">
            <Button
              variant="ghost"
              className="p-0 h-5 text-red-500 hover:text-red-500"
              onClick={tweetDestroyClick}
            >
              <Trash2 className="h-5 w-5 mr-3" />
              <span className="text-base font-bold">削除</span>
            </Button>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem className="px-4 py-3 hover:bg-accent hover:text-accent-foreground cursor-pointer">
            <Button variant="ghost" className="p-0 h-5" onClick={followClick}>
              <UserX className="h-5 w-5 mr-3" />
              <span className="font-bold">
                {`@${user.username}さんをフォロー`}
              </span>
            </Button>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
