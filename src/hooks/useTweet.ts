import { useState } from "react";
import { toast } from "sonner";
import { tweetText, tweetImage } from "@/apis/tweet";
import { TweetFormSchema } from "@/utils/schema/tweetFormSchema";

type TweetReturn = [
  ({ content, image }: TweetFormSchema) => Promise<void>,
  boolean,
];

export const useTweet = (): TweetReturn => {
  const [isLoading, setIsLoading] = useState(false);

  const createFormData = (tweet_id: number, image: File) => {
    const formData = new FormData();
    formData.append("tweet_id", tweet_id.toString());
    formData.append("image", image);
    return formData;
  };

  const createTweet = async ({ content, image }: TweetFormSchema) => {
    if (!content && !image) return;

    setIsLoading(true);
    try {
      const res = await tweetText({ content });
      if (image) {
        const { tweet_id } = res.data;
        const formData = createFormData(tweet_id, image);
        await tweetImage(formData);
      }
      toast.success("ツイートしました");
    } catch (error) {
      toast.error("ツイートに失敗しました");
    } finally {
      setIsLoading(false);
    }
  };

  return [createTweet, isLoading];
};
