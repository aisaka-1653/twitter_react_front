import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { FC } from "react";
import { Button } from "../ui/button";

type UserAvatarProps = {
  url: string | undefined;
};

export const UserAvatar: FC<UserAvatarProps> = ({ url }) => {
  return (
    <Button type="button" variant="circle" size="icon">
      <Avatar>
        <AvatarImage src={url} />
      </Avatar>
    </Button>
  );
};
