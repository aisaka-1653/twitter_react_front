import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type AutoResizeTextAreaProps = TextareaAutosizeProps & { placeholder: string };

export const AutoResizeTextArea = forwardRef<
  HTMLTextAreaElement,
  AutoResizeTextAreaProps
>(({ ...props }, ref) => {
  return (
    <TextareaAutosize
      className={cn(
        "overflow-hidden resize-none size-full bg-background text-xl focus-visible:outline-none"
      )}
      {...props}
      ref={ref}
    />
  );
});
