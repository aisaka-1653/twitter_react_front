import { type FC, useEffect, useRef } from "react";

import { useIsIntersecting } from "@/hooks/useIsIntersecting";
import { useAllTweets } from "@/hooks/useAllTweets";
import { Loader2 } from "lucide-react";

export const Loading: FC = () => {
  const observedRef = useRef<HTMLDivElement | null>(null);
  const { loadMoreTweets, isLast } = useAllTweets();

  const isIntersection: boolean =
    useIsIntersecting<HTMLDivElement>(observedRef);

  useEffect(() => {
    if (isIntersection && !isLast) {
      loadMoreTweets();
    }
  }, [isIntersection, isLast]);

  return (
    <div
      ref={observedRef}
      className="flex justify-center items-center bg-secondary py-3"
    >
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    </div>
  );
};
