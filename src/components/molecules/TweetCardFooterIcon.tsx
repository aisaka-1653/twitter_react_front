import { FC, ReactElement, cloneElement } from "react";
import { Button } from "../ui/button";

type TweetCardFooterIconProps = {
  className?: string | undefined;
  icon: ReactElement;
};

export const TweetCardFooterIcon: FC<TweetCardFooterIconProps> = ({
  className,
  icon,
}) => {
  return (
    <Button
      type="button"
      variant="circle"
      size="icon"
      className={`text-muted-foreground ${className}`}
    >
      {cloneElement(icon, {
        className: `h-4 w-4 text-inherit ${icon.props.className || ""}`.trim(),
      })}
    </Button>
  );
};
