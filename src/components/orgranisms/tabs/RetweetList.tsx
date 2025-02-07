import { TabsContent } from "../../ui/tabs";
import { Loader2 } from "lucide-react";
import { useUserInteraction } from "@/hooks/useUserInteraction";
import { TweetCard } from "../TweetCard";

type RetweetListProps = {
  userId: string;
};

export const RetweetList: React.FC<RetweetListProps> = ({ userId }) => {
  const {
    data: retweets,
    isLoading,
    isError,
    mutate,
  } = useUserInteraction(userId, "retweet");
  if (!retweets || isError) return null;

  return (
    <TabsContent value="retweet">
      {isLoading ? (
        <div className="flex items-start justify-center min-h-screen pt-5">
          <Loader2 className="size-6 animate-spin" />
        </div>
      ) : (
        retweets?.map((retweet) => (
          <TweetCard key={retweet.id} tweet={retweet} mutate={mutate} />
        ))
      )}
    </TabsContent>
  );
};
