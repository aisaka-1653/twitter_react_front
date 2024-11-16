import { MoreHorizontal, Trash2, UserPlus, UserX } from "lucide-react";
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
import { KeyedMutator } from "swr";
import { userFollow } from "@/apis/users";

type TweetMoreDropdownProps = {
  tweet: Tweet;
  mutate?: KeyedMutator<any>;
};

export const TweetMoreDropdown: FC<TweetMoreDropdownProps> = ({
  tweet,
  mutate,
}) => {
  const {
    user,
    engagement: { following },
  } = tweet;
  const { currentUser } = useCurrentUser();
  const isCurrentUser = currentUser?.id === user.id;

  const followClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await userFollow(user.id);
      toast.success("フォローしました");
    } catch (error) {
      console.log(error);
    }
  };

  const unfollowClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("フォロー解除");
  };

  const tweetDestroyClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await tweetDestroy(tweet.id);
      await mutate?.();
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
        {" "}
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
            {following ? (
              <Button
                variant="ghost"
                className="p-0 h-5"
                onClick={unfollowClick}
              >
                <UserX className="h-5 w-5 mr-3" />
                <span className="font-bold">
                  {`@${user.username}さんのフォローを解除`}
                </span>
              </Button>
            ) : (
              <Button variant="ghost" className="p-0 h-5" onClick={followClick}>
                <UserPlus className="h-5 w-5 mr-3" />
                <span className="font-bold">
                  {`@${user.username}さんをフォロー`}
                </span>
              </Button>
            )}
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
