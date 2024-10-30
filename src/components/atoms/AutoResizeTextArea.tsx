import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

type AutoResizeTextAreaProps = TextareaAutosizeProps &
  VariantProps<typeof textVariants> & { placeholder?: string };

const textVariants = cva(
  "overflow-hidden resize-none size-full bg-background text-xl",
  {
    variants: {
      variant: {
        default: "focus-visible:outline-none",
        outline:
          "rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const AutoResizeTextArea = forwardRef<
  HTMLTextAreaElement,
  AutoResizeTextAreaProps
>(({ variant, ...props }, ref) => {
  return (
    <TextareaAutosize
      className={cn(textVariants({ variant }))}
      {...props}
      ref={ref}
    />
  );
});
