import { UserAvatar } from "@/components/atoms/UserAvatar";
import { TweetFormFooter } from "@/components/molecules/TweetFormFooter";
import { FormProvider, useForm } from "react-hook-form";
import {
  tweetFormSchema,
  TweetFormSchema,
} from "@/utils/schema/tweetFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { FC } from "react";
import { TweetFormContent } from "@/components/molecules/TweetFormContent";

type TweetFormProps = {
  placeholder: string;
  onSubmit: (tweet: TweetFormSchema) => Promise<void>;
};

export const TweetForm: FC<TweetFormProps> = ({ placeholder, onSubmit }) => {
  const form = useForm<TweetFormSchema>({
    resolver: zodResolver(tweetFormSchema),
    defaultValues: { content: "" },
  });

  const handleSubmit = async (data: TweetFormSchema) => {
    await onSubmit(data);
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <div className="flex max-w-[598px] px-4 gap-2">
            <div className="pt-1">
              <UserAvatar url="https://github.com/shadcn.png" />
            </div>
            <div className="flex flex-col size-full max-w-[518px] gap-3 pt-2">
              <TweetFormContent placeholder={placeholder} />
              <TweetFormFooter />
            </div>
          </div>
        </form>
      </Form>
    </FormProvider>
  );
};
