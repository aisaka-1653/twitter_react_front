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
import { useImageUrl } from "@/hooks/useImageUrl";
import { ImagePreview } from "../ImagePreview";
import { useCurrentUser } from "@/hooks/uesCurrentUser";

export const ReplyForm = () => {
  const { imageUrl, createImageUrl, deleteImageUrl } = useImageUrl();
  const { currentUser } = useCurrentUser();

  const form = useForm<TweetFormSchema>({
    resolver: zodResolver(tweetFormSchema),
    defaultValues: { content: "" },
  });

  // TODO コメント投稿APIをたたく
  const handleSubmit = async (data: TweetFormSchema) => {
    deleteImageUrl();
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flex px-4 gap-2">
            <div className="pt-1">
              <UserAvatar user={currentUser} />
            </div>
            <div className="flex flex-col size-full gap-3 pt-2">
              <TweetFormContent placeholder="返信をツイート" />
              {imageUrl && (
                <ImagePreview
                  imageUrl={imageUrl}
                  deleteImageUrl={deleteImageUrl}
                />
              )}
              <TweetFormFooter
                isLoading={false}
                createImageUrl={createImageUrl}
              />
            </div>
          </div>
        </form>
      </Form>
    </FormProvider>
  );
};
