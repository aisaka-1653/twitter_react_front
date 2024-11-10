import { Card, CardContent } from "@/components/ui/card";
import { UserAvatar } from "../atoms/UserAvatar";
import { Comment } from "@/types/comment";
import { Link } from "react-router-dom";
import { CommentMoreDropdown } from "./CommentMoreDropdown";
import { KeyedMutator } from "swr";

type CommentCardProps = {
  comment: Comment;
  mutate: KeyedMutator<Array<Comment>>;
};

export const CommentCard: React.FC<CommentCardProps> = (props) => {
  const { comment, mutate } = props;
  const { user, content } = comment;

  return (
    <Card className="border-b-[1px] border-slate-600">
      <CardContent className="p-4 py-3">
        <div className="flex gap-2">
          <UserAvatar user={user} />
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex justify-between items-center gap-1 text-sm mb-1">
              <div>
                <Link to={`/users/${user.id}`}>
                  <span className="font-bold hover:underline">
                    {user.display_name}
                  </span>
                </Link>
                <span className="text-muted-foreground ml-1">
                  {`@${user.username}`}
                </span>
              </div>
              <CommentMoreDropdown comment={comment} mutate={mutate} />
            </div>
            <p className="whitespace-pre text-wrap break-words">{content}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
