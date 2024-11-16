import { Tweet } from "./tweet";

export type UserProfile = {
  id: string;
  email: string;
  display_name: string;
  username: string;
  avatar_url: string;
  header_url: string;
  bio: string | null;
  location: string | null;
  website: string | null;
  date_of_birth: string;
  uid: string;
  tweets: Array<Tweet>;
};

export type User = {
  id: string;
  display_name: string;
  username: string;
  avatar_url: string;
};
