import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { FC } from "react";
import { Button } from "../ui/button";

type Props = {
  url: string;
};

export const UserAvatar: FC<Props> = ({ url }) => {
  return (
    <Button variant="circle" size="icon">
      <Avatar>
        <AvatarImage src={url} />
      </Avatar>
    </Button>
  );
};
