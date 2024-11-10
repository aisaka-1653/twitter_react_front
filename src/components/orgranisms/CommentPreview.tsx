import { Tweet } from "@/types/tweet";
import { UserAvatar } from "../atoms/UserAvatar";

type CommentPreviewProps = {
  tweet: Tweet;
};

export const CommentPreview: React.FC<CommentPreviewProps> = ({ tweet }) => {
  const { user, content } = tweet;

  return (
    <div className="flex gap-2">
      <div className="pt-1">
        <UserAvatar user={user} />
      </div>
      <div className="flex flex-col size-full">
        <div className="flex justify-between items-center gap-1 text-sm">
          <div>
            <span className="font-bold">{user.display_name}</span>
            <span className="text-muted-foreground ml-1">
              {`@${user.username}`}
            </span>
          </div>
        </div>
        <p className="whitespace-pre text-wrap break-words">{content}</p>
        <p className="text-muted-foreground py-4">
          返信先: <span className="text-blue-400">{`@${user.username}`}</span>
          さん
        </p>
      </div>
    </div>
  );
};
