import { useUserProfile } from "@/hooks/useUserProfile";
import { TabsContent } from "../../ui/tabs";
import { TweetCard } from "../TweetCard";
import { Loader2 } from "lucide-react";

type TweetListProps = {
  userId: string;
};

export const TweetList: React.FC<TweetListProps> = ({ userId }) => {
  const { user, isLoading, isError, mutate } = useUserProfile(userId);
  if (!user || isError) return null;
  const { tweets } = user;

  return (
    <TabsContent value="tweet">
      {isLoading ? (
        <div className="flex items-start justify-center min-h-screen pt-5">
          <Loader2 className="size-6 animate-spin" />
        </div>
      ) : (
        tweets?.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} mutate={mutate} />
        ))
      )}
    </TabsContent>
  );
};
