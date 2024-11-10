import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { FC } from "react";
import { User } from "@/types/user";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

type UserAvatarProps = {
  user: User | undefined;
};

export const UserAvatar: FC<UserAvatarProps> = ({ user }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`/users/${user?.id}`);
  };

  return (
    <Button variant="circle" size="icon" onClick={handleClick}>
      <Avatar>
        <AvatarImage src={user?.avatar_url} className="object-cover" />
      </Avatar>
    </Button>
  );
};
