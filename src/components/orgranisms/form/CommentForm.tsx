import { Loader2, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tweet } from "@/types/tweet";
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
import { TweetCardFooterButton } from "@/components/molecules/TweetCardFooterButton";

type CommentFormProps = {
  tweet: Tweet;
};

export const CommentForm: React.FC<CommentFormProps> = ({ tweet }) => {
  const { id, engagement } = tweet;
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
      await createComment(id, content);
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
        <TweetCardFooterButton
          className="hover:bg-sky-500/5 hover:text-sky-400"
          onClick={(e) => e.stopPropagation()}
        >
          <MessageCircle className="size-4" />
          <span>{engagement.comment ? engagement.comment : ""}</span>
        </TweetCardFooterButton>
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
