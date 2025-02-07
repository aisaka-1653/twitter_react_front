import { User } from "./user";

export type Tweet = {
  id: string;
  content: string;
  image_url?: string;
  created_at: string;
  user: User;
  engagement: {
    following: boolean;
    comment: number;
    retweet: {
      count: number;
      retweeted: boolean;
    };
    like: {
      count: number;
      liked: boolean;
    };
  };
};
