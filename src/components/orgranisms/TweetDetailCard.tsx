import { Card, CardContent } from "@/components/ui/card";
import { Tweet } from "@/types/tweet";
import { FC } from "react";
import { TweetCardFooter } from "../molecules/TweetCardFooter";
import { TweetCardImage } from "../atoms/TweetCardImage";
import { TweetDetailCardHeader } from "../molecules/TweetDetailCardHeader";
import { formatTweetTimestamp } from "@/utils/dateTimeUtils";

type TweetCardProps = {
  tweet: Tweet;
};

export const TweetDetailCard: FC<TweetCardProps> = ({ tweet }) => {
  const { content, image_url, created_at } = tweet;
  const formattedDate = formatTweetTimestamp(created_at);

  return (
    <Card>
      <CardContent className="px-4 pt-3">
        <div className="flex gap-2">
          <div className="flex flex-col size-full mb-5">
            <TweetDetailCardHeader tweet={tweet} />
            <p className="whitespace-pre text-wrap break-words mt-3">
              {content}
            </p>
            <TweetCardImage imageUrl={image_url} className="my-3" />
            <p className="text-muted-foreground text-[15px] my-4">
              {formattedDate}
            </p>
            <div className="border-y-[1px] border-slate-800">
              <TweetCardFooter tweet={tweet} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
