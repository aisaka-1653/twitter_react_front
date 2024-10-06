import { FC } from "react";

type TweetCardImageProps = {
  imageUrl: string | undefined;
  className?: string;
};

export const TweetCardImage: FC<TweetCardImageProps> = ({
  imageUrl,
  className,
}) => {
  if (!imageUrl) return null;

  return (
    <div className={className || ""}>
      <img
        src={imageUrl}
        className="max-h-[510px] object-scale-down rounded-xl"
      />
    </div>
  );
};
