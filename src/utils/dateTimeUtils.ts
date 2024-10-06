import { format } from "date-fns";
import { ja } from "date-fns/locale";

export const formatTweetTimestamp = (created_at: string) => {
  return format(new Date(created_at), "ah時m分 · yyyy年MM月dd日", {
    locale: ja,
  });
};
