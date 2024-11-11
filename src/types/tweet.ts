import { User } from "./user";

export type Tweet = {
  id: string;
  content: string;
  image_url?: string;
  created_at: string;
  user: User;
  engagement: {
    comment: number;
  };
};
