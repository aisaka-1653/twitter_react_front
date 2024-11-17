import { TabsContent } from "../../ui/tabs";
import { Loader2 } from "lucide-react";
import { useUserInteraction } from "@/hooks/useAllRetweets";
import { TweetCard } from "../TweetCard";

type LikeListProps = {
  userId: string;
};

export const LikeList: React.FC<LikeListProps> = ({ userId }) => {
  const {
    data: likes,
    isLoading,
    isError,
    mutate,
  } = useUserInteraction(userId, "like");
  if (!likes || isError) return null;

  return (
    <TabsContent value="like">
      {isLoading ? (
        <div className="flex items-start justify-center min-h-screen pt-5">
          <Loader2 className="size-6 animate-spin" />
        </div>
      ) : (
        likes?.map((like) => (
          <TweetCard key={like.id} tweet={like} mutate={mutate} />
        ))
      )}
    </TabsContent>
  );
};
