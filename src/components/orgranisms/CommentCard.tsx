import { Card, CardContent } from "@/components/ui/card";
import { UserAvatar } from "../atoms/UserAvatar";
import { Comment } from "@/types/comment";
import { Link } from "react-router-dom";

type CommentCardProps = {
  comment: Comment;
};

export const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  const { user, content } = comment;

  return (
    <Card className="border-b-[1px] border-slate-600">
      <CardContent className="p-4 py-3">
        <div className="flex gap-2">
          <UserAvatar user={user} />
          <div className="flex flex-col size-full">
            <div className="flex justify-between items-center gap-1 text-sm">
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
            </div>
            <p className="whitespace-pre text-wrap break-words">{content}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
