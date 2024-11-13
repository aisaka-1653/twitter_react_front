import { FC, ReactNode } from "react";
import { Button } from "../ui/button";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const button = cva("flex items-center gap-1 text-muted-foreground", {
  variants: {
    variant: {
      default: "",
      comment: "hover:bg-sky-500/5 hover:text-sky-400",
      retweet: "hover:bg-green-500/5 hover:text-green-400",
      like: "hover:bg-rose-500/5 hover:text-rose-400",
      bookmark: "hover:bg-amber-500/5 hover:text-amber-400",
    },
    isActive: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "comment",
      isActive: true,
      className: "text-sky-400",
    },
    {
      variant: "retweet",
      isActive: true,
      className: "text-green-400",
    },
    {
      variant: "like",
      isActive: true,
      className: "text-rose-400",
    },
    {
      variant: "bookmark",
      isActive: true,
      className: "text-amber-400",
    },
  ],
  defaultVariants: {
    variant: "default",
    isActive: false,
  },
});

type TweetCardFooterButtonProps = VariantProps<typeof button> & {
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  children: ReactNode;
};

export const TweetCardFooterButton: FC<TweetCardFooterButtonProps> = ({
  variant,
  isActive,
  className,
  onClick,
  children,
}) => {
  return (
    <Button
      variant="circle"
      size="icon"
      className={clsx(button({ variant, isActive }), className)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
