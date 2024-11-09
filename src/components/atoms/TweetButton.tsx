import { FC, ReactNode } from "react";
import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";

type TweetButtonProps = {
  isDisabled: boolean;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
};

export const TweetButton: FC<TweetButtonProps> = ({
  isDisabled,
  onClick,
  className,
  children,
}) => (
  <Button
    type={onClick ? "button" : "submit"}
    size="full"
    className={twMerge(
      "bg-sky-500 text-white font-bold rounded-full hover:bg-sky-500/90",
      className,
    )}
    disabled={isDisabled}
    onClick={onClick}
  >
    {children}
  </Button>
);
