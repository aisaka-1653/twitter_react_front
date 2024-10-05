import { TweetForm } from "./form/TweetForm";
import { TweetCard } from "./TweetCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useSWRTweet } from "@/hooks/useSWRTweet";
import { Loading } from "../molecules/Loading";

export const Timeline = () => {
  const { tweets, isLast, isLoading, error } = useSWRTweet();

  if (error) return <div>エラーが発生しました</div>;
  if (!tweets && !isLoading) return <div>ツイートがありません</div>;

  return (
    <div className="flex flex-col w-[598px] border-x-[1px] border-slate-600">
      <Tabs defaultValue="recommend">
        <TabsList className="w-full h-[53px] border-b-[1px]">
          <TabsTrigger value="recommend">おすすめ</TabsTrigger>
          <TabsTrigger value="following">フォロー中</TabsTrigger>
        </TabsList>
        <TweetForm />
        <TabsContent value="recommend">
          {tweets?.map((tweet) => <TweetCard key={tweet.id} tweet={tweet} />)}
          {!isLast && <Loading />}
        </TabsContent>
        <TabsContent value="following"></TabsContent>
      </Tabs>
    </div>
  );
};
