import { UserAvatar } from "@/components/atoms/UserAvatar";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { TweetFormContent } from "@/components/molecules/TweetFormContent";
import { useCurrentUser } from "@/hooks/uesCurrentUser";
import { createComment } from "@/apis/comment";
import { toast } from "sonner";
import { TweetButton } from "@/components/atoms/TweetButton";
import { Loader2 } from "lucide-react";
import {
  commentFormSchema,
  CommentFormSchema,
} from "@/utils/schema/commentFormSchema";
import { KeyedMutator } from "swr";
import { Comment } from "@/types/comment";

type ReplyFormProps = {
  tweetId: string;
  mutate: KeyedMutator<Array<Comment>>;
};

export const ReplyForm: React.FC<ReplyFormProps> = (props) => {
  const { tweetId, mutate } = props;
  const { currentUser } = useCurrentUser();

  const form = useForm<CommentFormSchema>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: { content: "" },
  });

  const {
    formState: { isValid, isSubmitting },
  } = form;

  const handleSubmit = async ({ content }: CommentFormSchema) => {
    try {
      await createComment(tweetId, content);
      await mutate();
      toast.success("コメントしました");
      form.reset();
    } catch {
      toast.error("コメントに失敗しました");
    }
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
              <TweetFormContent placeholder="コメントを投稿" />
              <div className="flex justify-end">
                <TweetButton isDisabled={!isValid} className="w-16">
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    "送信"
                  )}
                </TweetButton>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </FormProvider>
  );
};
