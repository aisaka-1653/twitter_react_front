import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { AutoResizeTextArea } from "@/components/atoms/AutoResizeTextArea";
import { FC } from "react";

type TweetFormContentProps = {
  placeholder: string;
};

export const TweetFormContent: FC<TweetFormContentProps> = ({
  placeholder,
}) => {
  const { control } = useFormContext();

  return (
    <div className="p-0.5">
      <FormField
        control={control}
        name="content"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <AutoResizeTextArea {...field} placeholder={placeholder} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
