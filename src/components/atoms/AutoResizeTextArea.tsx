import TextareaAutosize from "react-textarea-autosize";
import { cn } from "@/lib/utils";

export const AutoResizeTextArea = ({ ...props }) => {
  return (
    <TextareaAutosize
      className={cn(
        "overflow-hidden resize-none size-full bg-background text-xl focus-visible:outline-none"
      )}
      {...props}
    />
  );
};
