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
import { useTweet } from "@/hooks/useTweet";
import { useImageUrl } from "@/hooks/useImageUrl";
import { ImagePreview } from "../ImagePreview";
import { useUser } from "@/hooks/useUser";

export const TweetForm = () => {
  const [createTweet, isLoading] = useTweet();
  const { imageUrl, createImageUrl, deleteImageUrl } = useImageUrl();
  const { user } = useUser();

  const form = useForm<TweetFormSchema>({
    resolver: zodResolver(tweetFormSchema),
    defaultValues: { content: "" },
  });

  const handleSubmit = async (data: TweetFormSchema) => {
    await createTweet(data);
    deleteImageUrl();
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <div className="flex w-[598px] px-4 gap-2">
            <div className="pt-1">
              <UserAvatar url={user?.avatar_url} />
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
