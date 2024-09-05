import { ChangeEvent, FC, useRef } from "react";
import { Textarea } from "../ui/textarea";

export const TextareaAutoSize: FC<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ ...props }) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!divRef.current) return;
    divRef.current.textContent = e.currentTarget.value;
  };

  return (
    <div className="relative">
      <div
        ref={divRef}
        className="overflow-hidden whitespace-pre-wrap break-words min-h-7 text-xl leading-6 py-0.5"
      ></div>
      <Textarea
        {...props}
        variant="borderless"
        className={`overflow-hidden absolute inset-0 size-full text-xl leading-6 py-0.5 ${props.className || ""}`}
        onChange={handleChange}
      />
    </div>
  );
};
