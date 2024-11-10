import { TabsContent } from "../../ui/tabs";
import { Loader2 } from "lucide-react";
import { useAllComments } from "@/hooks/useAllComments";
import { CommentCard } from "../CommentCard";

type CommentListProps = {
  userId: string;
};

export const CommentList: React.FC<CommentListProps> = ({ userId }) => {
  const { comments, isLoading, isError, mutate } = useAllComments(
    "user",
    userId,
  );
  if (!comments || isError) return null;

  return (
    <TabsContent value="comment">
      {isLoading ? (
        <div className="flex items-start justify-center min-h-screen pt-5">
          <Loader2 className="size-6 animate-spin" />
        </div>
      ) : (
        comments?.map((comment) => (
          <CommentCard key={comment.id} comment={comment} mutate={mutate} />
        ))
      )}
    </TabsContent>
  );
};
