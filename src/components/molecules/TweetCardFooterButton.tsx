import { FC, ReactNode } from "react";
import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";

type TweetCardFooterButtonProps = {
  className?: string | undefined;
  onClick?: (e: React.MouseEvent) => void;
  children: ReactNode;
};

export const TweetCardFooterButton: FC<TweetCardFooterButtonProps> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <Button
      variant="circle"
      size="icon"
      className={twMerge(
        "flex items-center gap-1 text-muted-foreground",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
