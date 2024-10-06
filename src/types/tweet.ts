import { User } from "./user";

export type Tweet = {
  id: string;
  content: string;
  image_url?: string;
  user: User;
};
