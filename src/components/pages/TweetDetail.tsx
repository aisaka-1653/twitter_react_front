import { useSingleTweet } from "@/hooks/useSingleTweet";
import { useNavigate, useParams } from "react-router-dom";
import { TweetDetailCard } from "../orgranisms/TweetDetailCard";
import { Button } from "../ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { ReplyForm } from "../orgranisms/form/ReplyForm";
import { useAllComments } from "@/hooks/useAllComments";
import { CommentCard } from "../orgranisms/CommentCard";

export const TweetDetail = () => {
  const { tweetId } = useParams();
  const navigate = useNavigate();
  const { tweet, isLoading, isError } = useSingleTweet(tweetId);
  const { comments, mutate } = useAllComments(tweetId);

  const handleClick = () => {
    navigate(-1);
  };

  if (isLoading) return <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
  if (isError) return <div>エラーが発生しました</div>;
  if (!tweetId) return <div>ツイートidが見つかりません</div>;
  if (!tweet) return <div>ツイートがありません</div>;
  return (
    <div className="w-[598px] border-x-[1px] border-slate-600">
      <div className="flex items-center gap-4 p-2">
        <Button variant="circle" onClick={handleClick}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-xl font-bold">ツイートする</h2>
      </div>
      <TweetDetailCard tweet={tweet} />
      <div className="border-b-[1px] border-slate-600 pb-3">
        <ReplyForm tweetId={tweetId} mutate={mutate} />
      </div>
      {comments?.map((comment) => (
        <CommentCard key={comment.id} comment={comment} mutate={mutate} />
      ))}
    </div>
  );
};
