import { Loader2, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tweet } from "@/types/tweet";
import { TweetCardFooterIcon } from "@/components/molecules/TweetCardFooterIcon";
import { CommentPreview } from "../CommentPreview";
import { UserAvatar } from "@/components/atoms/UserAvatar";
import { useCurrentUser } from "@/hooks/uesCurrentUser";
import { TweetFormContent } from "@/components/molecules/TweetFormContent";
import { FormProvider, useForm } from "react-hook-form";
import {
  commentFormSchema,
  CommentFormSchema,
} from "@/utils/schema/commentFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TweetButton } from "@/components/atoms/TweetButton";
import { createComment } from "@/apis/comment";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { toast } from "sonner";

type CommentFormProps = {
  tweet: Tweet;
};

export const CommentForm: React.FC<CommentFormProps> = ({ tweet }) => {
  const { currentUser } = useCurrentUser();
  const [open, setOpen] = useState(false);

  const form = useForm<CommentFormSchema>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: { content: "" },
  });

  const {
    formState: { isValid, isSubmitting },
  } = form;

  const handleSubmit = async ({ content }: CommentFormSchema) => {
    try {
      await createComment(tweet.id, content);
      toast.success("コメントしました");
      form.reset();
    } catch {
      toast.error("コメントに失敗しました");
    } finally {
      setOpen(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <TweetCardFooterIcon
          className="hover:bg-sky-500/20 hover:text-sky-400"
          icon={<MessageCircle />}
          onClick={(e) => e.stopPropagation()}
        />
      </DialogTrigger>
      <DialogContent>
        <CommentPreview tweet={tweet} />
        <FormProvider {...form}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="flex gap-2 mb-12">
                <UserAvatar user={currentUser} />
                <div className="w-full pt-1">
                  <TweetFormContent placeholder="コメントを投稿" />
                </div>
              </div>
              <DialogFooter className="justify-end">
                <TweetButton isDisabled={!isValid} className="w-16">
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    "送信"
                  )}
                </TweetButton>
              </DialogFooter>
            </form>
          </Form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
