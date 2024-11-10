import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CommentList } from "./tabs/CommentList";
import { TweetList } from "./tabs/TweetList";

type ProfileTweetCollection = {
  userId: string | undefined;
};

export const ProfileTweetCollection: React.FC<ProfileTweetCollection> = ({
  userId,
}) => {
  if (!userId) return null;

  return (
    <Tabs defaultValue="tweet">
      <TabsList className="w-full h-[53px] border-b-[1px]">
        <TabsTrigger value="tweet">ツイート</TabsTrigger>
        <TabsTrigger value="comment">コメント</TabsTrigger>
        <TabsTrigger value="retweet">リツイート</TabsTrigger>
        <TabsTrigger value="like">いいね</TabsTrigger>
      </TabsList>
      <TweetList userId={userId} />
      <CommentList userId={userId} />
      <TabsContent value="retweet"></TabsContent>
      <TabsContent value="like"></TabsContent>
    </Tabs>
  );
};
