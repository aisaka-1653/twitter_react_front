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
import { toast } from "sonner";
import { KeyedMutator } from "swr";
import { Comment } from "@/types/comment";
import { commentDestroy } from "@/apis/comment";

type CommentMoreDropdownProps = {
  comment: Comment;
  mutate?: KeyedMutator<Array<Comment>>;
};

export const CommentMoreDropdown: FC<CommentMoreDropdownProps> = ({
  comment,
  mutate,
}) => {
  const { user } = comment;
  const { currentUser } = useCurrentUser();
  const isCurrentUser = currentUser?.id === user.id;

  const followClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const commentDestroyClick = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    try {
      await commentDestroy(comment.id);
      await mutate?.();
      toast.success("コメントを削除しました");
    } catch {
      toast.error("コメントの削除に失敗しました");
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
              onClick={commentDestroyClick}
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
