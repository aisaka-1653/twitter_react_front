import { FC, ReactNode } from "react";
import { Button } from "../ui/button";

type TweetButtonProps = {
  isDisabled: boolean;
  onClick?: () => void;
  children: ReactNode;
};

export const TweetButton: FC<TweetButtonProps> = ({
  isDisabled,
  onClick,
  children,
}) => (
  <Button
    type={onClick ? "button" : "submit"}
    size="full"
    className="bg-sky-500 text-white font-bold rounded-full hover:bg-sky-500/90"
    disabled={isDisabled}
    onClick={onClick}
  >
    {children}
  </Button>
);
