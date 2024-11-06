import { Tweet } from "@/types/tweet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { TweetCard } from "./TweetCard";
import { KeyedMutator } from "swr";
import { UserProfile } from "@/types/user";

type ProfileTweetCollection = {
  tweets: Array<Tweet>;
  mutate: KeyedMutator<UserProfile>;
};

export const ProfileTweetCollection: React.FC<ProfileTweetCollection> = ({
  tweets,
  mutate,
}) => {
  return (
    <Tabs defaultValue="tweet">
      <TabsList className="w-full h-[53px] border-b-[1px]">
        <TabsTrigger value="tweet">ツイート</TabsTrigger>
        <TabsTrigger value="like">いいね</TabsTrigger>
        <TabsTrigger value="reply">返信</TabsTrigger>
        <TabsTrigger value="media">メディア</TabsTrigger>
      </TabsList>
      <TabsContent value="tweet">
        {tweets?.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} mutate={mutate} />
        ))}
      </TabsContent>
      <TabsContent value="like"></TabsContent>
      <TabsContent value="reply"></TabsContent>
      <TabsContent value="media"></TabsContent>
    </Tabs>
  );
};
