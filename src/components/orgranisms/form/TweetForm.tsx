import { UserAvatar } from "@/components/atoms/UserAvatar";
import { TweetFormFooter } from "@/components/molecules/TweetFormFooter";
import { FormProvider, useForm } from "react-hook-form";
import {
  tweetFormSchema,
  TweetFormSchema,
} from "@/utils/schema/tweetFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { TweetFormContent } from "@/components/molecules/TweetFormContent";
import { useCreateTweet } from "@/hooks/useCreateTweet";
import { useImageUrl } from "@/hooks/useImageUrl";
import { ImagePreview } from "../ImagePreview";
import { useCurrentUser } from "@/hooks/uesCurrentUser";
import { useAllTweets } from "@/hooks/useAllTweets";

export const TweetForm = () => {
  const [createTweet, isLoading] = useCreateTweet();
  const { imageUrl, createImageUrl, deleteImageUrl } = useImageUrl();
  const { currentUser } = useCurrentUser();
  const { mutate } = useAllTweets();

  const form = useForm<TweetFormSchema>({
    resolver: zodResolver(tweetFormSchema),
    defaultValues: { content: "" },
  });

  const handleSubmit = async (data: TweetFormSchema) => {
    await createTweet(data);
    await mutate();
    deleteImageUrl();
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="pt-3 pb-2 border-b-[1px] border-slate-600"
        >
          <div className="flex px-4 gap-2">
            <div className="pt-1">
              <UserAvatar user={currentUser} />
            </div>
            <div className="flex flex-col size-full gap-3 pt-2">
              <TweetFormContent placeholder="いまどうしてる?" />
              {imageUrl && (
                <ImagePreview
                  imageUrl={imageUrl}
                  deleteImageUrl={deleteImageUrl}
                />
              )}
              <TweetFormFooter
                isLoading={isLoading}
                createImageUrl={createImageUrl}
              />
            </div>
          </div>
        </form>
      </Form>
    </FormProvider>
  );
};
