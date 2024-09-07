import { AutoResizeTextArea } from "@/components/atoms/AutoResizeTextArea";
import { UserAvatar } from "@/components/atoms/UserAvatar";
import { TweetFormFooter } from "@/components/molecules/TweetFormFooter";
import { FormProvider, useForm } from "react-hook-form";
import {
  tweetFormSchema,
  TweetFormSchema,
} from "@/utils/schema/tweetFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FC } from "react";

type TweetFormProps = {
  placeholder: string;
  onSubmit: (tweet: TweetFormSchema) => void;
};

export const TweetForm: FC<TweetFormProps> = (props) => {
  const { placeholder, onSubmit } = props;
  const form = useForm<TweetFormSchema>({
    resolver: zodResolver(tweetFormSchema),
    defaultValues: {
      content: "",
    },
  });

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex max-w-[598px] px-4 gap-2">
            <div className="pt-1">
              <UserAvatar url="https://github.com/shadcn.png" />
            </div>
            <div className="flex flex-col size-full max-w-[518px] gap-3 pt-2">
              <div className="p-0.5">
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <AutoResizeTextArea
                          {...field}
                          placeholder={placeholder}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <TweetFormFooter />
            </div>
          </div>
        </form>
      </Form>
    </FormProvider>
  );
};
